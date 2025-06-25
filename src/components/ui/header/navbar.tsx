import { RiMenuLine } from "react-icons/ri";
import { NavbarRequestType } from ".";
import NextLink from "../../link";
import { FaChevronDown } from "react-icons/fa";

export default function HeaderNavbar(
  props: Pick<NavbarRequestType, "categories">
) {
  return (
    <div className="flex gap-10 max-md:hidden">
      <NextLink
        href={"test"}
        label={
          <div className="flex items-center gap-2">
          <FaChevronDown/>
            <span>محصولات</span>
          </div>
        }
      />
      <NextLink href={"test"} label="مقالات" />
      <NextLink href={"test"} label="درباره ما" />
      <NextLink href={"test"} label="تماس با ما" />
    </div>
  );
}
