"use client";
import { cn } from "@/utils/cn";
import { AriaRole, ReactNode } from "react";

export default function NextButton({
  title,
  className,
  role,
  onClick,
  ...rest
}: {
  title: string | ReactNode;
  className?: string;
  role?: AriaRole;
  onClick?: () => void;
}) {
  return (
    <button
      {...rest}
      role={role || "button"}
      className={cn("cursor-pointer", className)}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
