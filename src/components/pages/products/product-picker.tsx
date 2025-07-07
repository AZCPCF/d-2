"use client";

import Tooltip from "@/components/ui/tooltip";
import type {
  ColorInterface,
  ProductInterface,
  SizeInterface,
} from "@/interfaces";
import { cn } from "@/utils/cn";
import { formatNumberWithCommas } from "@/utils/formater";
import { useEffect, useMemo, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { ColorBox } from "./color-box";

interface Props {
  res: ProductInterface;
  colorOptions: (ColorInterface & { sizes: SizeInterface[] })[];
}

export default function ProductSelector({ colorOptions, res }: Props) {
  const initialColorId = useMemo(
    () => colorOptions[0]?.color_id,
    [colorOptions]
  );
  const [selectedColorId, setSelectedColorId] = useState(initialColorId);
  // const [status,setStatus] = useState(false)
  const selectedColor = useMemo(
    () => colorOptions.find((c) => c.color_id === selectedColorId),
    [selectedColorId, colorOptions]
  );

  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedColor?.sizes?.length) {
      const firstAvailableSize = selectedColor.sizes.find((s) => s.stock > 0);
      setSelectedSizeId(firstAvailableSize?.stock_id || null);
    } else {
      setSelectedSizeId(null);
    }
  }, [selectedColor]);

  return (
    <div>
      {/* Color Picker */}
      <div>
        <div className="max-md:flex flex-row-reverse justify-between items-center max-md:mt-4">
          <div className="relative inline-block mb-2 group">
            <button
              onClick={() => console.log("Favorited!")} // Replace with real logic
              className="p-2 rounded-full  duration-200 shadow-md"
            >
              <FiHeart className="text-xl text-red-500" />
            </button>

            <Tooltip
              title="افزودن به علاقه‌مندی‌ها"
              className="text-base text-white"
            />
          </div>
          <h3 className="font-medium mb-2 text-xl text-gray-500 text-start">
            رنگ بندی‌های محصول
          </h3>
        </div>
        <div className="flex gap-3 flex-wrap">
          {colorOptions.map((color) => (
            <button
              key={color.color_id}
              onClick={() => setSelectedColorId(color.color_id)}
              className="focus:outline-none"
            >
              <ColorBox
                color={color.color}
                className={`w-8 h-8 ring-4 duration-200 ${
                  selectedColorId === color.color_id
                    ? "ring-primary-main"
                    : "ring-transparent"
                }`}
                title={color.title}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      {selectedColor && (
        <div>
          <h3 className="font-medium mb-2 text-xl text-gray-500 text-start">
            سایزبندی‌ها
          </h3>
          <div className="flex gap-3 flex-wrap">
            {selectedColor.sizes.map((size) => {
              const isSelected = selectedSizeId === size.stock_id;
              const isAvailable = size.stock > 0;

              return (
                <button
                  key={size.stock_id}
                  disabled={!isAvailable}
                  onClick={() =>
                    isAvailable && setSelectedSizeId(size.stock_id)
                  }
                  className={cn(
                    `px-4 py-2 rounded border text-sm duration-200`,
                    isAvailable
                      ? isSelected
                        ? "bg-primary-main text-white border-primary-main"
                        : "border-gray-400 hover:bg-gray-100"
                      : "border-red-300 text-red-400 !cursor-not-allowed"
                  )}
                >
                  {size.title}
                  {!isAvailable && " (ناموجود)"}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="mt-10 space-y-4 border border-gray-200 rounded-lg p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          خرید {res.title}
        </h2>

        {/* Price */}
        <div>
          <p className="text-sm text-gray-500">قیمت محصول</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary-main">
              {formatNumberWithCommas(res.after_price)} تومان
            </span>
            {res.discount > 0 && (
              <>
                <span className="line-through text-gray-400 text-base">
                  {formatNumberWithCommas(res.price)} تومان
                </span>
                <span className="text-red-500 font-medium">
                  ٪{res.discount}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Selection Summary */}
        {selectedColor && selectedSizeId && (
          <div className="text-xl text-gray-600 flex items-center gap-3">
            <ColorBox color={selectedColor.color} title={selectedColor.title} />
            رنگ: ({selectedColor.title}) - سایز{" "}
            {
              selectedColor.sizes.find((s) => s.stock_id === selectedSizeId)
                ?.title
            }
          </div>
        )}
        {selectedColor && selectedSizeId ? (
          <button
            onClick={async () => {
              // setStatus((await addToCart({ count: 1, stock_id: +selectedSizeId })).success)
            }}
            className="w-full mt-4 bg-primary-400 hover:bg-primary-main duration-200 text-white text-base font-semibold py-3 rounded-lg"
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <button
            disabled
            className="w-full mt-4 bg-gray-200 text-gray-400 text-base font-medium py-3 rounded !cursor-not-allowed"
          >
            {res.stock_sum
              ? "انتخاب رنگ و سایز الزامی است"
              : "این محصول ناموجود است"}
          </button>
        )}
      </div>
    </div>
  );
}
