import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
type NextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  label: string | ReactNode;
  className?: string;
};
export default function NextLink({
  label,
  href,
  className,
  role,
  ...rest
}: NextLinkProps) {
  return (
    <Link
      role={role || "link"}
      href={href}
      className={cn(
        "hover:text-primary-main duration-100 font-kalameh",
        className
      )}
      {...rest}
    >
      {label}
    </Link>
  );
}
