import { ImageFromApiInterface } from "@/interfaces";
import { panelUrl } from "@/utils/env";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  BiInfoCircle,
  BiPhoneCall,
  BiSolidUser,
} from "react-icons/bi";
import {
  FaHome,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { PiArticle } from "react-icons/pi";

/** 
 * Represents a navigation link with label and icon.
 */
export type AppBarLinkType = {
  href: string;
  label: string;
  icon: IconType;
};

/**
 * Links shown in the app's top navigation bar.
 */
export const appBarLinks: AppBarLinkType[] = [
  { href: "/", label: "خانه", icon: FaHome },
  { href: panelUrl, label: "حساب کاربری", icon: BiSolidUser },
  { href: "/articles-hub", label: "مقالات", icon: PiArticle },
  { href: "/about-us", label: "درباره ما", icon: BiInfoCircle },
  { href: "/contact-us", label: "تماس با ما", icon: BiPhoneCall },
];

/**
 * Represents a social media link with icon and type.
 */
export type SocialLinkType = {
  icon: ReactNode;
  href: "instagram" | "whatsapp" | "telegram";
};

/**
 * Social media links with corresponding icons.
 */
export const socialLinksData: SocialLinkType[] = [
  { icon: <FaInstagram fontSize={24} />, href: "instagram" },
  { icon: <FaWhatsapp fontSize={24} />, href: "whatsapp" },
  { icon: <FaTelegramPlane fontSize={24} />, href: "telegram" },
];

/**
 * Simple link type used in footer sections.
 */
export type FooterLinkType = {
  href: string;
  label: string;
};

/**
 * Footer links grouped by main and other categories.
 */
export const footerLinks: {
  main: FooterLinkType[];
  others: FooterLinkType[];
} = {
  main: [
    { href: "/articles-hub", label: "اخبار و مقالات" },
    { href: "/about-us", label: "درباره ما" },
    { href: "/contact-us", label: "تماس با ما" },
    { href: "/gallery", label: "گالری" },
    { href: "/faq", label: "سوالات متداول" },
  ],
  others: [
    { href: panelUrl, label: "ورود" },
    { href: "/payment-rules", label: "نحوه ثبت سفارش" },
    { href: "/privacy", label: "حریم خصوصی" },
    { href: "/rules", label: "قوانین سایت" },
    { href: "/licenses", label: "گواهی نامه ها" },
  ],
};

/**
 * Link type for categories including the associated image metadata.
 */
export type CategoriesLinkType = {
  link: string;
  image: ImageFromApiInterface;
};

/**
 * Categories links for the site with images and URLs.
 */
export const categoriesLinks: CategoriesLinkType[] = [
  {
    link: "men-clothes",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/man.jpeg",
      alt: "پوشاک مردانه",
    },
  },
  {
    link: "children-clothes-boys",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/boy.jpeg",
      alt: "پوشاک پسرانه",
    },
  },
  {
    link: "children-clothes-girls",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/girl.jpeg",
      alt: "پوشاک دخترانه",
    },
  },
  {
    link: "shoes-and-sneakers",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/shoes.jpeg",
      alt: "کفش و کتونی",
    },
  },
];
