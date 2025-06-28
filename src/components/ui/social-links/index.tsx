"use client";

import { useClientCtx } from "@/contexts/client-context";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import NextLink from "../link";
import { ReactNode } from "react";

const socialLinks: {
  icon: ReactNode;
  href: "instagram" | "whatsapp" | "telegram";
}[] = [
  { icon: <FaInstagram fontSize={24} />, href: "instagram" },
  { icon: <FaWhatsapp fontSize={24} />, href: "whatsapp" },
  { icon: <FaTelegramPlane fontSize={24} />, href: "telegram" },
];
const SocialLinks = (props: { className?: string }) => {
  const { aboutUs } = useClientCtx();
  return (
    <>
      {socialLinks.map((item, index) => (
        <NextLink
          key={`social-link-${index}`}
          href={aboutUs?.[item.href] || ""}
          label={item.icon}
          className={props.className}
        />
      ))}
    </>
  );
};
export default SocialLinks;
