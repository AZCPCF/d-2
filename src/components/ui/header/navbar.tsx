import { FaChevronDown } from "react-icons/fa";
import NextLink from "../link";
import { CategoryInterface } from "@/interfaces";
import { cn } from "@/utils/cn";

export default function HeaderNavbar({
  categories,
}: {
  categories: CategoryInterface[];
}) {
  return (
    <div className="flex gap-10 max-md:hidden">
      {/* Dropdown Root */}
      <div className="relative group">
        <div className="flex items-center gap-2 cursor-pointer text-xl hover:text-primary-main">
          <FaChevronDown />
          <span>محصولات</span>
        </div>
        {/* Main Dropdown */}
        <div
          className={cn(
            "absolute right-0 w-56 max-lg:w-40 bg-white shadow-lg rounded-lg border border-gray-100 z-40 group-hover:visible group-hover:opacity-100 opacity-0 invisible transition-all duration-300"
          )}
        >
          <ul className="py-2 text-sm text-gray-700">
            {categories.map((cat) => (
              <li key={cat.id} className="relative group/item">
                <NextLink
                  href={`/products/category/${cat.page_url}`}
                  label={cat.title}
                  className="block px-4 py-2 hover:bg-primary-50 hover:text-primary-700 transition whitespace-nowrap"
                />
                {/* Subcategory */}
                {cat.sub_categories?.length ? (
                  <ul className="absolute top-0 right-full py-2 mr-1 w-56 max-lg:w-40 bg-white shadow-lg rounded-lg border border-gray-100 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-300 z-50">
                    {cat.sub_categories.map((sub) => (
                      <li key={sub.id} className="relative group/subitem">
                        <NextLink
                          href={`/products/category/${sub.page_url}`}
                          label={sub.title}
                          className="block px-4 py-2 text-sm hover:bg-primary-100 hover:text-primary-800 transition whitespace-nowrap"
                        />
                        {/* Deep Subcategory */}
                        {sub.sub_categories?.length ? (
                          <ul className="absolute top-0 right-full py-2 mr-1 w-56 max-lg:w-40 bg-white shadow-lg rounded-lg border border-gray-100 invisible group-hover/subitem:visible opacity-0 group-hover/subitem:opacity-100 transition-all duration-300 z-50">
                            {sub.sub_categories.map((deep) => (
                              <li key={deep.id}>
                                <NextLink
                                  href={`/products/category/${deep.page_url}`}
                                  label={deep.title}
                                  className="block px-4 py-2 text-sm hover:bg-primary-100 hover:text-primary-800 transition whitespace-nowrap"
                                />
                              </li>
                            ))}
                          </ul>
                        ) : undefined}
                      </li>
                    ))}
                  </ul>
                ) : undefined}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Static Items */}
      {[
        { href: "/articles-hub", label: "مقالات" },
        { href: "/about-us", label: "درباره ما" },
        { href: "/contact-us", label: "تماس با ما" },
      ].map(({ href, label }) => (
        <NextLink key={href} className="text-xl" href={href} label={label} />
      ))}
    </div>
  );
}
