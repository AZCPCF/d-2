"use client";
import { ColorBox } from "@/components/pages/products/color-box";
import { FilterInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { formatNumberWithCommas } from "@/utils/formater";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useReducer } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// ✨ Define this before the return statement
const sortOptions = [
  { value: "", label: "جدیدترین" },
  { value: "expensive", label: "گران‌ترین" },
  { value: "cheap", label: "ارزان‌ترین" },
  { value: "best_seller", label: "پرفروش‌ترین" },
  { value: "discount", label: "تخفیف٪" },
];

type FilterState = {
  search: string;
  value: [number, number];
  selectedColors: number[];
  onlyAvailable: boolean;
  selectedSize: number | null;
  isModalOpen: boolean;
  sort: string; // ➕ add this
};

type FilterAction =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "TOGGLE_COLOR"; payload: number }
  | { type: "SET_AVAILABLE"; payload: boolean }
  | { type: "SET_SIZE"; payload: number | null }
  | { type: "SET_MODAL_OPEN"; payload: boolean }
  | { type: "SET_SORT"; payload: string } // ➕ add this
  | { type: "RESET_FILTERS" };

// 🎛️ Initial State
const initialState: FilterState = {
  search: "",
  value: [0, 3000000],
  selectedColors: [],
  onlyAvailable: false,
  selectedSize: null,
  isModalOpen: false,
  sort: "", // ➕ add this
};

// 🧠 Reducer Logic
function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_PRICE":
      return { ...state, value: action.payload };
    case "TOGGLE_COLOR":
      const exists = state.selectedColors.includes(action.payload);
      return {
        ...state,
        selectedColors: exists
          ? state.selectedColors.filter((id) => id !== action.payload)
          : [...state.selectedColors, action.payload],
      };
    case "SET_AVAILABLE":
      return { ...state, onlyAvailable: action.payload };
    case "SET_SIZE":
      return { ...state, selectedSize: action.payload };
    case "SET_MODAL_OPEN":
      return { ...state, isModalOpen: action.payload };
    case "RESET_FILTERS":
      return { ...initialState, isModalOpen: state.isModalOpen };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export default function Search({ colors, sizes }: FilterInterface) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    search,
    sort,
    value,
    selectedColors,
    onlyAvailable,
    selectedSize,
    isModalOpen,
  } = state;
  function handleClearFilters() {
    dispatch({ type: "RESET_FILTERS" });
    replace(pathname);
    dispatch({ type: "SET_MODAL_OPEN", payload: false });
  }
  const activeFilterCount = [
    search ? 1 : 0,
    onlyAvailable ? 1 : 0,
    selectedColors[0] ? 1 : 0,
    selectedSize !== null ? 1 : 0,
    value[0] > 0 || value[1] < 3000000 ? 1 : 0,
  ].reduce((acc, val) => acc + val, 0);
  
  useEffect(() => {
    const min = parseInt(searchParams.get("min_price") || "0");
    const max = parseInt(searchParams.get("max_price") || "3000000");
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "";
    const onlyAvailable = searchParams.get("only_available") === "1";
    const selectedSize = searchParams.get("size_id")
      ? parseInt(searchParams.get("size_id")!)
      : null;

    const colorParam = searchParams.get("color_ids") || "";
    const selectedColors = colorParam
      .split(",")
      .map((id) => parseInt(id))
      .filter((id) => !isNaN(id));

    dispatch({ type: "SET_SEARCH", payload: search });
    dispatch({ type: "SET_PRICE", payload: [min, max] });
    dispatch({ type: "SET_SORT", payload: sort });
    dispatch({ type: "SET_AVAILABLE", payload: onlyAvailable });
    dispatch({ type: "SET_SIZE", payload: selectedSize });
    selectedColors.forEach((id) => {
      dispatch({ type: "TOGGLE_COLOR", payload: id });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🎯 Apply Filters
  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", search);
    params.set("min_price", value[0].toString());
    params.set("max_price", value[1].toString());

    if (selectedColors.length > 0) {
      params.set("color_ids", selectedColors.join(","));
    } else {
      params.delete("color_ids");
    }

    if (onlyAvailable) {
      params.set("only_available", "1");
    } else params.delete("only_available");

    if (selectedSize !== null) {
      params.set("size_id", selectedSize.toString());
    } else params.delete("size_id");

    replace(`${pathname}?${params.toString()}`);
    dispatch({ type: "SET_MODAL_OPEN", payload: false });
  }

  return (
    <>
      <div className="col-span-full flex flex-wrap justify-between gap-2 mb-2 text-sm font-medium">
        <ul className="flex  gap-2 flex-wrap">
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => {
                  dispatch({ type: "SET_SORT", payload: option.value });
                  const params = new URLSearchParams(searchParams.toString());
                  if (option.value) {
                    params.set("sort", option.value);
                  } else {
                    params.delete("sort");
                  }
                  replace(`${pathname}?${params.toString()}`);
                }}
                className={cn(
                  `px-3 py-1 rounded-md text-lg transition-colors duration-75 border-2 border-gray-200`,
                  sort === option.value || (!sort && option.value === "")
                    ? "bg-primary-main text-white"
                    : "bg-primary-50 text-black hover:bg-primary-100"
                )}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="max-md:w-full flex justify-end mt-4">
          <button
            className="mb-4 px-4 py-2 text-lg bg-primary-main text-white rounded-md relative"
            onClick={() => dispatch({ type: "SET_MODAL_OPEN", payload: true })}
          >
            فیلتر محصولات
            {activeFilterCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 🔳 Mobile Filter Toggle Button */}

      {/* 📱 Modal Filter Drawer (Mobile View) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex items-center justify-center !font-kalameh modal">
          <div className="bg-background dark:text-white w-[90%] max-h-[90vh] p-4 rounded-lg overflow-y-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">اعمال فیلتر</h2>
              <button
                onClick={() =>
                  dispatch({ type: "SET_MODAL_OPEN", payload: false })
                }
                className="absolute top-2 left-2 text-gray-600 hover:text-black text-xl"
              >
                ✖
              </button>
            </div>
            <>
              {/* 🔍 Search Input */}
              <input
                type="text"
                placeholder="جستجو محصول"
                value={search}
                onChange={(e) =>
                  dispatch({ type: "SET_SEARCH", payload: e.target.value })
                }
                className="form-input mb-4 w-full"
              />

              {/* ✅ Only Available */}
              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_AVAILABLE",
                      payload: e.target.checked,
                    })
                  }
                />
                فقط کالاهای موجود
              </label>

              {/* 💰 Price Range */}
              <div className="my-4">
                <p className="mb-2">
                  بازه قیمت از{" "}
                  <span className="text-primary-main">
                    {formatNumberWithCommas(value[0])}
                  </span>{" "}
                  تا{" "}
                  <span className="text-primary-main">
                    {formatNumberWithCommas(value[1])}
                  </span>{" "}
                  تومان
                </p>
                <ReactRangeSliderInput
                  max={3000000}
                  value={value}
                  onInput={(val) =>
                    dispatch({
                      type: "SET_PRICE",
                      payload: val as [number, number],
                    })
                  }
                  ariaLabel={["حداقل قیمت", "حداکثر قیمت"]}
                />
              </div>

              {/* 🎨 Color Filter */}
              <div className="flex flex-wrap gap-1.5 items-center mb-4">
                <p className="w-full font-bold">رنگ‌ها:</p>
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_COLOR", payload: color.id })
                    }
                    className="h-max"
                  >
                    <ColorBox
                      color={color.color}
                      title={color.title}
                      className={cn(
                        "w-7 h-7 mx-0.5",
                        selectedColors.includes(color.id)
                          ? "ring-[3px] ring-primary-main"
                          : ""
                      )}
                    />
                  </button>
                ))}
              </div>

              {/* 📏 Size Filter */}
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <p className="w-full font-bold">سایز:</p>
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() =>
                      dispatch({
                        type: "SET_SIZE",
                        payload: selectedSize === size.id ? null : size.id,
                      })
                    }
                    className={cn(
                      "border border-black rounded-sm px-3 py-1 text-sm bg-white text-black",
                      selectedSize === size.id && "bg-primary-main text-white"
                    )}
                  >
                    {size.title}
                  </button>
                ))}
              </div>

              <div className="flex w-full justify-end gap-3">
                <button
                  onClick={handleSearch}
                  className="w-max bg-primary-main duration-100 px-4 py-2 text-white rounded-md"
                >
                  اعمال فیلتر
                </button>
                {activeFilterCount > 0 ? (
                  <button
                    onClick={handleClearFilters}
                    className="w-max bg-gray-200 hover:bg-gray-300 duration-100 px-4 py-2 text-black rounded-md"
                  >
                    حذف فیلترها
                  </button>
                ) : undefined}
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
}
