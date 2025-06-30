"use client";
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
  const tooltipTextClass = isDark ? "text-white" : "text-black";

  return (
    <div className="relative inline-block group">
      {title && (
        <div
          className={cn(
            "absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-secondary-main text-lg max-md:text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap",
            tooltipTextClass,
            classNameDefault
          )}
        >
          {title}
        </div>
      )}
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
