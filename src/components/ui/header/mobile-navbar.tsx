"use client";

import { useState } from "react";
import { CategoryInterface } from "@/interfaces";
import { MdClose, MdMenu } from "react-icons/md";
import { cn } from "@/utils/cn";
import NextButton from "../../button";
import NextLink from "@/components/link";

interface MobileNavbarProps {
  categories: CategoryInterface[];
}

export default function MobileNavbar({ categories }: MobileNavbarProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [expandedSub, setExpandedSub] = useState<number | null>(null);

  // Close all menus when nav closes
  const handleClose = () => {
    setOpen(false);
    setExpanded(null);
    setExpandedSub(null);
  };

  return (
    <div className="max-md:block hidden">
      {/* Hamburger Button */}
      <NextButton
        onClick={() => setOpen(true)}
        className="bg-gray-200 dark:bg-slate-600 dark:text-primary-main p-3 max-[500px]:p-1.5 outline-0 rounded-md text-[#727272] hover:bg-gray-200 transition-colors duration-200 max-md:block hidden"
        role="button"
        aria-label="باز کردن منوی موبایل"
        title={<MdMenu fontSize={24} />}
      />

      {/* Overlay to close menu */}
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-background/40 z-40 mobile-nav"
          aria-hidden="true"
        />
      )}

      {/* Side Navigation */}
      <nav
        className={cn(
          "fixed top-0 right-0 w-72 h-full bg-background text-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="منوی دسته‌بندی‌ها"
      >
        <div className="p-5 h-full flex flex-col overflow-y-auto">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">دسته‌بندی‌ها</h2>
            <button
              onClick={handleClose}
              aria-label="بستن منو"
              className="text-gray-700 hover:text-black transition"
            >
              <MdClose fontSize={22} />
            </button>
          </div>

          {/* Categories list */}
          <ul className="space-y-2" role="list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded(expanded === cat.id ? null : cat.id);
                    }
                  }}
                  aria-expanded={expanded === cat.id}
                  aria-controls={`sub-cat-${cat.id}`}
                >
                  <NextLink
                    href={`/categories/${cat.page_url}`}
                    label={cat.title}
                    className={cn(
                      "py-2 text-gray-800",
                      !cat.sub_categories?.length && "w-full"
                    )}
                    onClick={handleClose}
                  />
                  {cat.sub_categories?.length ? (
                    <span className="text-2xl text-gray-500" aria-hidden="true">
                      {expanded === cat.id ? "–" : "+"}
                    </span>
                  ) : null}
                </div>

                {/* Sub-categories */}
                {expanded === cat.id && cat.sub_categories && (
                  <ul
                    className="ml-4 mt-2 space-y-1 border-r border-primary-main pr-2"
                    id={`sub-cat-${cat.id}`}
                    role="list"
                  >
                    {cat.sub_categories.map((sub) => (
                      <li key={sub.id}>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() =>
                            setExpandedSub(expandedSub === sub.id ? null : sub.id)
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setExpandedSub(expandedSub === sub.id ? null : sub.id);
                            }
                          }}
                          aria-expanded={expandedSub === sub.id}
                          aria-controls={`deep-sub-cat-${sub.id}`}
                        >
                          <NextLink
                            href={`/categories/${sub.page_url}`}
                            label={sub.title}
                            className={cn(
                              "text-sm text-gray-700",
                              !sub.sub_categories?.length && "w-full"
                            )}
                            onClick={handleClose}
                          />
                          {sub.sub_categories?.length ? (
                            <span className="text-2xl text-gray-400" aria-hidden="true">
                              {expandedSub === sub.id ? "–" : "+"}
                            </span>
                          ) : null}
                        </div>

                        {/* Deeper sub-categories */}
                        {expandedSub === sub.id && sub.sub_categories?.length && (
                          <ul
                            className="ml-4 mt-1 space-y-1 border-r border-primary-main pr-2"
                            id={`deep-sub-cat-${sub.id}`}
                            role="list"
                          >
                            {sub.sub_categories.map((deep) => (
                              <li key={deep.id} className="p-0.5 flex">
                                <NextLink
                                  href={`/categories/${deep.page_url}`}
                                  label={deep.title}
                                  className="text-xs text-gray-600 w-full"
                                  onClick={handleClose}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
