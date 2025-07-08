"use client";

import Tooltip from "@/components/tooltip";
import { cn } from "@/utils/cn";
import isDarkColor from "@/utils/color-checker";
import { generateDynamicClass } from "@/utils/style-injector";
import { ReactNode } from "react";
export function ColorBox({
  color,
  className,
  children,
  title,
}: {
  color?: string;
  className?: string;
  children?: ReactNode;
  title?: string;
}) {
  const classNameDefault = generateDynamicClass(`background-color: ${color};`);
  const isDark = isDarkColor(color);

  return (
    <div className="relative inline-block group">
      <Tooltip
        className={cn(classNameDefault,isDark?"text-white":"text-black")}
        title={title}
      />
      <div
        className={cn(
          "w-4 h-4 p-2 shadow-sm border border-black/20 rounded-md",
          className,
          classNameDefault
        )}
      >
        {children}
      </div>
    </div>
  );
}
