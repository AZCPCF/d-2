"use client";
import { cn } from "@/utils/cn";
import { generateDynamicClass } from "@/utils/style-injector";
import { ReactNode } from "react";

export function ColorBox({
  color,
  className,
  children,
}: {
  color?: string;
  className?: string;
  children?: ReactNode;
}) {
  const classNameDefault = generateDynamicClass(`background-color: ${color};`);

  return (
    <div
      className={cn(
        className,
        "w-4 h-4 p-2 shadow-sm border border-black/20 rounded-md",
        classNameDefault
      )}
    >
      {children}
    </div>
  );
}
