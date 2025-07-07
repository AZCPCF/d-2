import { JSX } from "react";
import { cn } from "./cn";

interface ParsedNodeProps {
  className?: string;
}

interface ParserResult {
  isSafe: boolean;
  text: string;
  ParsedNode: (props: ParsedNodeProps) => JSX.Element | null;
}

/**
 * Parses an input HTML string to sanitize potentially dangerous elements and attributes.
 *
 * It removes <script> and <iframe> tags, strips event handler attributes,
 * and neutralizes "javascript:" protocols to prevent XSS attacks.
 *
 * @param input - The raw HTML string to parse.
 * @returns An object containing:
 *   - `isSafe`: whether the input is free of potentially dangerous tags/protocols,
 *   - `text`: sanitized HTML string,
 *   - `ParsedNode`: React component rendering the sanitized HTML or null if unsafe.
 */
export function parser(input: string): ParserResult {
  // Detect potentially dangerous content
  const hasScript = /<\s*script\b[^>]*>/i.test(input);
  const hasJsProtocol = /javascript:/i.test(input);
  const hasIframe = /<\s*iframe\b[^>]*>/i.test(input);

  const isSafe = !(hasScript || hasJsProtocol || hasIframe);

  // Sanitize input by removing scripts, iframes, event handlers, and javascript: protocols
  const text = input
    .replace(/<\s*script\b[^>]*>(.*?)<\s*\/script\s*>/gi, "")
    .replace(/<\s*iframe\b[^>]*>(.*?)<\s*\/iframe\s*>/gi, "")
    .replace(/\s*on\w+=["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "#");

  // React component to render sanitized HTML if safe
  const ParsedNode = ({ className }: ParsedNodeProps): JSX.Element | null =>
    isSafe ? (
      <pre
        dangerouslySetInnerHTML={{ __html: text }}
        className={cn(
          "parser text-xl max-md:text-lg px-6 py-4 w-full text-wrap overflow-hidden",
          className
        )}
      />
    ) : null;

  return {
    isSafe,
    text,
    ParsedNode,
  };
}