import { cn } from "@/utils/cn";
import { AriaRole, ReactNode } from "react";

export default function NextButton({
  title,
  className,
  role,
}: {
  title: string | ReactNode;
  className?: string;
  role?: AriaRole;
}) {
  return (
    <button role={role || "button"} className={cn("cursor-pointer", className)}>
      {title}
    </button>
  );
}
