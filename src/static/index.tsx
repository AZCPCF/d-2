import { ImageFromApiInterface } from "@/interfaces";
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

type AppBarlinkType = { href: string; label: string; icon: IconType };
export const appBarlinks: AppBarlinkType[] = [
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

type FooterLinkType = { href: string; label: string };
export const footerLinks: { main: FooterLinkType[]; others: FooterLinkType[] } =
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

type CategoriesLinkType = { link: string; image: ImageFromApiInterface };
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
