import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiInfoCircle, BiPhoneCall, BiSolidUser } from "react-icons/bi";
import {
  FaHome,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { PiArticle } from "react-icons/pi";

type appBarlinkType = { href: string; label: string; icon: IconType };
export const appBarlinks: appBarlinkType[] = [
  { href: "/", label: "خانه", icon: FaHome },
  { href: "http://localhost:5173", label: "حساب کاربری", icon: BiSolidUser },
  { href: "/articles-hub", label: "مقالات", icon: PiArticle },
  { href: "/about-us", label: "درباره ما", icon: BiInfoCircle },
  { href: "/contact-us", label: "تماس با ما", icon: BiPhoneCall },
];

type SocialLinkType = {
  icon: ReactNode;
  href: "instagram" | "whatsapp" | "telegram";
};
export const socialLinksData: SocialLinkType[] = [
  { icon: <FaInstagram fontSize={24} />, href: "instagram" },
  { icon: <FaWhatsapp fontSize={24} />, href: "whatsapp" },
  { icon: <FaTelegramPlane fontSize={24} />, href: "telegram" },
];

type footerLinkType = { href: string; label: string };
export const footerLinks: { main: footerLinkType[]; others: footerLinkType[] } =
  {
    main: [
      { href: "t", label: "اخبار و مقالات" },
      { href: "about-us", label: "درباره ما" },
      { href: "contact-us", label: "تماس با ما" },
      { href: "gallery", label: "گالری" },
      { href: "faq", label: "سوالات متداول" },
    ],
    others: [
      { href: "http://localhost:5173", label: "ورود" },
      { href: "payment-rules", label: "نحوه ثبت سفارش" },
      { href: "privacy", label: "حریم خصوصی" },
      { href: "rules", label: "قوانین سایت" },
      { href: "licenses", label: "گواهی نامه ها" },
    ],
  };
