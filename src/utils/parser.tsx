import { JSX } from "react";
import { cn } from "./cn";

export function parser(input: string): {
  isSafe: boolean;
  text: string;
  ParsedNode: ({ className }: { className?: string }) => JSX.Element | null;
} {
  const hasScript = /<\s*script\b[^>]*>/i.test(input);
  const hasEventHandlers = /on\w+=["']?/i.test(input);
  const hasJsProtocol = /javascript:/i.test(input);
  const hasIframe = /<\s*iframe\b[^>]*>/i.test(input);

  const isSafe = !(hasScript || hasEventHandlers || hasJsProtocol || hasIframe);

  const text = input
    .replace(/<\s*script\b[^>]*>(.*?)<\s*\/script\s*>/gi, "")
    .replace(/<\s*iframe\b[^>]*>(.*?)<\s*\/iframe\s*>/gi, "")
    .replace(/\s*on\w+=["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "#");

  return {
    isSafe,
    text,
    ParsedNode: ({ className }) =>
      isSafe ? (
        <pre
          dangerouslySetInnerHTML={{ __html: text }}
          className={cn("text-xl max-md:text-lg px-6 py-4 w-full text-wrap", className)}
        />
      ) : null,
  };
}
