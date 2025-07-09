"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import NextButton from "@/components/button";
import SearchModal from "@/components/modal/search-modal";

export default function HeaderSearchInput() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NextButton
        onClick={() => setOpen(true)}
        className="bg-gray-200 dark:bg-sky-500 dark:hover:bg-sky-600 dark:text-white h-max lg:w-60 p-3 max-[500px]:p-1.5 outline-0 rounded-full max-lg:rounded-md text-lg flex justify-between items-center text-[#727272] gap-2 hover:bg-gray-200 transition-colors duration-200"
        aria-expanded={open}
        aria-controls="search-modal"
        title={
          <>
            <span className="max-lg:hidden">جستجو محصول</span>
            <BiSearch fontSize={24} />
          </>
        }
      />
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}
