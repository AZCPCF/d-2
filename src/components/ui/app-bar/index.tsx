"use client";

import { usePathname } from "next/navigation";
import NextLink from "../link";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import { PiArticle } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { cn } from "@/utils/cn";

const links = [
  { href: "/", label: "خانه", icon: FaHome },
  { href: "http://localhost:5173", label: "حساب کاربری", icon: FaUser },
  { href: "/articles", label: "مقالات", icon: PiArticle },
  { href: "/about", label: "درباره ما", icon: BiInfoCircle },
  { href: "/contact", label: "تماس با ما", icon: BiPhoneCall },
];

export default function AppBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 inset-x-4 z-20 max-md:block hidden">
      <div className="bg-secondary-main/60 backdrop-blur-md shadow-xl rounded-xl flex items-center justify-evenly gap-6 py-3 px-4 border border-white/10">
        {links.map((link, index) => (
          <NextLink
            key={`app-bar-link-${index}`}
            href={link.href}
            className={cn(
              `flex flex-col items-center text-xs font-medium`,
              pathname === link.href
                ? "text-primary-main"
                : "text-white hover:text-secondary-800"
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
