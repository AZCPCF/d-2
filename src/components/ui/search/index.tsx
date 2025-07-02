"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PriceSlider from "../price-slider";
type Filters = {
  search: string;
};
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [filters, setFilters] = useState<Filters>({ search: "" });
  const { replace } = useRouter();

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());
    Object.keys(filters).forEach((key) => {
      if (filters[key as keyof Filters]) {
        params.set(key, filters[key as keyof Filters]);
      } else {
        params.delete(key);
      }
    });
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full gap-4 p-10 bg-primary-50/50 grid">
      <input
        type="text"
        placeholder={"جستجو محصول"}
        onChange={(e) => {
          setFilters({ ...filters, search: e.target.value });
        }}
        value={filters.search}
        className="form-input"
      />
      <PriceSlider  />
      <div className="flex w-full justify-end">
        <button
          onClick={handleSearch}
          className="w-max bg-primary-300 hover:bg-primary-main duration-100 px-4 py-2 text-white rounded-md"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}
