import { cn } from "@/utils/cn";

export default function Tooltip({
  title,
  className,
}: {
  className: string;
  title?: string;
}) {
  return (
    <>
      {title && (
        <div
          className={cn(
            "absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-secondary-main text-lg max-md:text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap",
            className
          )}
        >
          {title}
        </div>
      )}
    </>
  );
}
