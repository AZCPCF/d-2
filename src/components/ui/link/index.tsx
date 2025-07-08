import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type NextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  label: string | ReactNode;
  className?: string;
};

/**
 * Wrapper around Next.js Link with added styling and accessible role.
 * Supports `label` as string or JSX content.
 */
export default function NextLink({
  label,
  href,
  className,
  role = "link",
  ...rest
}: NextLinkProps) {
  return (
    <Link
      href={href}
      role={role}
      className={cn("hover:text-primary-main dark:text-white duration-100", className)}
      {...rest}
    >
      {typeof label === "string" ? (
        <span>{label}</span>
      ) : (
        label
      )}
    </Link>
  );
}
