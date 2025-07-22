"use client";

import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { appBarLinks } from "@/static";
import NextLink from "@/components/link";

/**
 * Fixed bottom navigation bar with icon links.
 * Only visible on medium screens and smaller (hidden on larger screens).
 */
export default function AppBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 inset-x-4 z-20 max-md:block hidden">
      <nav
        className="
          bg-secondary-400/80 backdrop-blur-md shadow-xl rounded-xl 
          flex items-center justify-evenly gap-6 py-3 px-4 
          border border-white/10
        "
        aria-label="Bottom navigation"
      >
        {appBarLinks.map((link, index) => {
          const isActive = pathname === link.href;
          console.log(isActive);
          return (
            <NextLink
              key={`app-bar-link-${index}`}
              href={link.href}
              className={cn(
                "flex flex-col items-center text-xs font-medium duration-200",
                isActive
                  ? "!text-primary-300 hover:!text-primary-300"
                  : "text-white hover:text-primary-300"
              )}
              aria-current={isActive ? "page" : undefined}
              label={
                <>
                  <link.icon aria-hidden="true" size={20} />
                  <span className="mt-1">{link.label}</span>
                </>
              }
            />
          );
        })}
      </nav>
    </div>
  );
}
