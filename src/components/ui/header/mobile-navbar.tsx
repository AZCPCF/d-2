"use client";

import { useState } from "react";
import { CategoryInterface } from "@/interfaces";
import NextLink from "../link";
import { MdClose, MdMenu } from "react-icons/md";
import { cn } from "@/utils/cn";
import NextButton from "../button";

export default function MobileNavbar({
  categories,
}: {
  categories: CategoryInterface[];
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [expandedSub, setExpandedSub] = useState<number | null>(null);

  return (
    <div className="max-md:block hidden">
      <NextButton
        onClick={() => setOpen(true)}
        className="bg-gray-100 p-3 max-[500px]:p-1.5 outline-0 rounded-md text-[#727272] hover:bg-gray-200 transition-colors duration-200 max-md:block hidden"
        role="button"
        title={<MdMenu fontSize={24} />}
      />
      {open && (
        <div
          onClick={() => {
            setOpen(false);
            setExpanded(null);
            setExpandedSub(null);
          }}
          className="fixed inset-0 bg-black/40 z-40 mobile-nav"
        />
      )}

      <nav
        className={cn(
          "fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5 h-full flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">دسته‌بندی‌ها</h2>
            <button onClick={() => setOpen(false)}>
              <MdClose fontSize={22} />
            </button>
          </div>

          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setExpanded(expanded === cat.id ? null : cat.id)
                  }
                >
                  <NextLink
                    href={`/products/category/${cat.page_url}`}
                    label={cat.title}
                    className={cn(
                      "py-2 text-gray-800",
                      !cat.sub_categories?.length && "w-full"
                    )}
                    onClick={() => setOpen(false)}
                  />
                  {cat.sub_categories?.length ? (
                    <span className="text-2xl text-gray-500">
                      {expanded === cat.id ? "–" : "+"}
                    </span>
                  ) : undefined}
                </div>

                {expanded === cat.id && cat.sub_categories && (
                  <ul className="ml-4 mt-2 space-y-1 border-r border-primary-main pr-2">
                    {cat.sub_categories.map((sub) => (
                      <li key={sub.id}>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() =>
                            setExpandedSub(
                              expandedSub === sub.id ? null : sub.id
                            )
                          }
                        >
                          <NextLink
                            href={`/products/category/${sub.page_url}`}
                            label={sub.title}
                            className={cn(
                              "text-sm text-gray-700",
                              !sub.sub_categories?.length && "w-full"
                            )}
                            onClick={() => setOpen(false)}
                          />
                          {sub.sub_categories?.length ? (
                            <span className="text-2xl text-gray-400">
                              {expandedSub === sub.id ? "–" : "+"}
                            </span>
                          ) : undefined}
                        </div>

                        {expandedSub === sub.id &&
                          sub.sub_categories?.length && (
                            <ul className="ml-4 mt-1 space-y-1 border-r border-primary-main pr-2">
                              {sub.sub_categories.map((deep) => (
                                <li key={deep.id} className="p-0.5 flex">
                                  <NextLink
                                    href={`/products/category/${deep.page_url}`}
                                    label={deep.title}
                                    className="text-xs text-gray-600 w-full"
                                    onClick={() => setOpen(false)}
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
