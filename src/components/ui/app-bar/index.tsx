"use client";

import { appBarlinks } from "@/static";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import NextLink from "../link";

export default function AppBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 inset-x-4 z-20 max-md:block hidden">
      <div className="bg-secondary-400/80 backdrop-blur-md shadow-xl rounded-xl flex items-center justify-evenly gap-6 py-3 px-4 border border-white/10">
        {appBarlinks.map((link, index) => (
          <NextLink
            key={`app-bar-link-${index}`}
            href={link.href}
            className={cn(
              `flex flex-col items-center text-xs font-medium duration-200`,
              pathname === link.href
                ? "text-primary-main hover:text-primary-main"
                : "text-white hover:text-primary-main"
            )}
            label={
              <>
                <link.icon size={20} />
                <span className="mt-1">{link.label}</span>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
