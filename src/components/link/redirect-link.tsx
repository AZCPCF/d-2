import { cn } from "@/utils/cn";
import Link from "next/link";
import { ReactNode } from "react";

interface RedirectLinkProps {
  href: string;
  className?: string;
  title: ReactNode;
  ariaLabel?: string;
}

export default function RedirectLink({
  href,
  className,
  title,
  ariaLabel,
}: RedirectLinkProps) {
  const computedAriaLabel =
    ariaLabel ?? (typeof title === "string" ? title : undefined);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 w-full p-4 text-white bg-primary-400 rounded-lg text-xl",
        className
      )}
      aria-label={computedAriaLabel}
    >
      {title}
    </Link>
  );
}
