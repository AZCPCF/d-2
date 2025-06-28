"use client";

import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { BiInfoCircle, BiPhoneCall, BiSolidUser } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { PiArticle } from "react-icons/pi";
import NextLink from "../link";

const links = [
  { href: "/", label: "خانه", icon: FaHome },
  { href: "http://localhost:5173", label: "حساب کاربری", icon: BiSolidUser },
  { href: "/articles", label: "مقالات", icon: PiArticle },
  { href: "/about", label: "درباره ما", icon: BiInfoCircle },
  { href: "/contact", label: "تماس با ما", icon: BiPhoneCall },
];

export default function AppBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 inset-x-4 z-20 max-md:block hidden">
      <div className="bg-primary-main/70 backdrop-blur-md shadow-xl rounded-xl flex items-center justify-evenly gap-6 py-3 px-4 border border-white/10">
        {links.map((link, index) => (
          <NextLink
            key={`app-bar-link-${index}`}
            href={link.href}
            className={cn(
              `flex flex-col items-center text-xs font-medium duration-200`,
              pathname === link.href
                ? "text-secondary-main"
                : "text-white hover:text-primary-600"
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
