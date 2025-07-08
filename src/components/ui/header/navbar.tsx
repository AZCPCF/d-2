import { FaChevronDown } from "react-icons/fa";
import { CategoryInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import NextLink from "@/components/link";

interface HeaderNavbarProps {
  categories: CategoryInterface[];
}

export default function HeaderNavbar({ categories }: HeaderNavbarProps) {
  return (
    <nav className="flex gap-10 max-md:hidden" aria-label="Main navigation">
      {/* Products Dropdown Root */}
      <div
        className="relative group"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div
          className="flex items-center gap-2 cursor-pointer text-xl hover:text-primary-main dark:text-white"
          aria-controls="products-dropdown"
          aria-haspopup="true"
        >
          <FaChevronDown aria-hidden="true" />
          <span>محصولات</span>
        </div>

        {/* Main Dropdown */}
        <div
          id="products-dropdown"
          className={cn(
            "absolute right-0 w-56 max-lg:w-40 bg-background shadow-lg rounded-lg border border-gray-100 z-40",
            "group-hover:visible group-hover:opacity-100 opacity-0 invisible transition-all duration-300"
          )}
          role="menu"
          aria-label="زیرمنوی محصولات"
        >
          <ul className="py-2 text-sm text-gray-700" role="none">
            {categories.map((cat) => (
              <li key={cat.id} className="relative group/item" role="none">
                <NextLink
                  href={`/categories/${cat.page_url}`}
                  label={cat.title}
                  className="block px-4 py-2 hover:bg-primary-200 hover:text-primary-700 transition whitespace-nowrap"
                  role="menuitem"
                />
                {/* Subcategory */}
                {cat.sub_categories?.length ? (
                  <ul
                    className="absolute top-0 right-full py-2 mr-1 w-56 max-lg:w-40 bg-background shadow-lg rounded-lg border border-gray-100 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-300 z-50"
                    role="menu"
                    aria-label={`${cat.title} زیرمنو`}
                  >
                    {cat.sub_categories.map((sub) => (
                      <li
                        key={sub.id}
                        className="relative group/subitem"
                        role="none"
                      >
                        <NextLink
                          href={`/categories/${sub.page_url}`}
                          label={sub.title}
                          className="block px-4 py-2 text-sm hover:bg-primary-200 hover:text-primary-800 transition whitespace-nowrap"
                          role="menuitem"
                        />
                        {/* Deep Subcategory */}
                        {sub.sub_categories?.length ? (
                          <ul
                            className="absolute top-0 right-full py-2 mr-1 w-56 max-lg:w-40 bg-background shadow-lg rounded-lg border border-gray-100 invisible group-hover/subitem:visible opacity-0 group-hover/subitem:opacity-100 transition-all duration-300 z-50"
                            role="menu"
                            aria-label={`${sub.title} زیرمنو`}
                          >
                            {sub.sub_categories.map((deep) => (
                              <li key={deep.id} role="none">
                                <NextLink
                                  href={`/categories/${deep.page_url}`}
                                  label={deep.title}
                                  className="block px-4 py-2 text-sm hover:bg-primary-200 hover:text-primary-800 transition whitespace-nowrap"
                                  role="menuitem"
                                />
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Static Links */}
      {[
        { href: "/articles-hub", label: "مقالات" },
        { href: "/about-us", label: "درباره ما" },
        { href: "/contact-us", label: "تماس با ما" },
      ].map(({ href, label }) => (
        <NextLink
          key={href}
          className="text-xl"
          href={href}
          label={label}
          role="link"
        />
      ))}
    </nav>
  );
}
