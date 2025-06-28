import { cn } from "@/utils/cn";
import Link from "next/link";
import { ReactNode } from "react";

export default function RedirectLink(props: {
  href: string;
  className?: string;
  title: ReactNode;
}) {
  return (
    <Link
      href={props.href}
      className={cn(
        "flex items-center gap-2 w-full p-4 text-white bg-primary-400 rounded-lg text-xl",
        props.className
      )}
    >
      {props.title}
    </Link>
  );
}
