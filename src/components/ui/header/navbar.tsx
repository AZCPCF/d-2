// import { CategoryInterface } from "@/interfaces";
import { FaChevronDown } from "react-icons/fa";
import NextLink from "../link";
// props: {
//   categories: CategoryInterface[];
// }
export default function HeaderNavbar() {
  return (
    <div className="flex gap-10 max-md:hidden">
      <div className="">
        <div className="flex gap-10 max-md:hidden">
          <div className="group">
            <div className="flex items-center gap-2 cursor-pointer text-xl hover:text-primary-main">
              <FaChevronDown />
              <span>محصولات</span>
            </div>
          </div>
        </div>
      </div>

      <NextLink className="text-xl" href="/articles" label="مقالات" />
      <NextLink className="text-xl" href="/about" label="درباره ما" />
      <NextLink className="text-xl" href="/contact" label="تماس با ما" />
    </div>
  );
}
