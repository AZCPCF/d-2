import { cn } from "@/utils/cn";

interface TooltipProps {
  /** Tooltip text to display */
  title?: string;
  /** Additional CSS classes for the tooltip container */
  className?: string;
}

/**
 * Tooltip component that shows a text bubble on hover.
 * Uses Tailwind CSS classes and scales in/out with group-hover.
 */
export default function Tooltip({ title, className }: TooltipProps) {
  if (!title) return null;

  return (
    <div
      className={cn(
        "absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-secondary-main text-lg max-md:text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap",
        className
      )}
    >
      {title}
    </div>
  );
}
