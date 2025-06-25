import { FaChevronDown } from "react-icons/fa";
import { NavbarRequestType } from ".";
import NextLink from "../../link";

const navLinks = [
  {
    href: "test",
    label: (
      <div className="flex items-center gap-2">
        <FaChevronDown />
        <span>محصولات</span>
      </div>
    ),
  },
  { href: "test", label: "مقالات" },
  { href: "test", label: "درباره ما" },
  { href: "test", label: "تماس با ما" },
];

export default function HeaderNavbar(
  props: Pick<NavbarRequestType, "categories">
) {
  return (
    <div className="flex gap-10 max-md:hidden">
      {navLinks.map((link, index) => (
        <NextLink className="text-xl" key={index} href={link.href} label={link.label} />
      ))}
    </div>
  );
}
