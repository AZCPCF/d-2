import NextLink from "@/components/ui/link";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
const socialLinks = [
  { icon: <FaInstagram fontSize={24} />, href: "/" },
  { icon: <FaWhatsapp fontSize={24} />, href: "/" },
  { icon: <FaTelegramPlane fontSize={24} />, href: "/" },
];
export default function SocialLinks() {
  return (
    <div className="w-full flex flex-wrap pb-5">
      <p className="w-full text-end">ما را در شبکه های اجتماعی دنبال کنید</p>
      <div className="w-full flex justify-end items-center pt-3 gap-3">
        {socialLinks.map((item, i) => (
          <NextLink
            className="hover:text-white"
            key={i}
            href={item.href}
            label={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
