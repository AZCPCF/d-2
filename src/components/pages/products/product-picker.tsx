"use client";

import LogoutModal from "@/components/modal/logout-modal";
import Tooltip from "@/components/tooltip";
import { useClientCtx } from "@/contexts/client-context";
import type {
  ColorInterface,
  ProductInterface,
  SizeInterface,
} from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/utils/cn";
import { formatNumberWithCommas } from "@/utils/formater";
import { useEffect, useMemo, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ColorBox } from "./color-box";

interface Props {
  res: ProductInterface;
  colorOptions: (ColorInterface & { sizes: SizeInterface[] })[];
}

export default function ProductSelector({ colorOptions, res }: Props) {
  const favorites = useMemo(() => JSON.parse(res.favorites) as number[], [res.favorites]);
  const initialColorId = colorOptions[0]?.color_id;

  const [selectedColorId, setSelectedColorId] = useState(initialColorId);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const { user } = useClientCtx();
  const [isFav, setIsFav] = useState(favorites.includes(user?.id));

  const selectedColor = useMemo(
    () => colorOptions.find((c) => c.color_id === selectedColorId),
    [selectedColorId, colorOptions]
  );

  useEffect(() => {
    setIsFav(favorites.includes(user?.id));
  }, [user?.id, favorites]);

  useEffect(() => {
    if (selectedColor?.sizes?.length) {
      const firstAvailableSize = selectedColor.sizes.find((s) => s.stock > 0);
      setSelectedSizeId(firstAvailableSize?.stock_id || null);
    } else {
      setSelectedSizeId(null);
    }
  }, [selectedColor]);

  const toggleFavorite = async () => {
    setLoading(true);
    const { status } = await fetcher({
      endpoint: `user/favorite/${res.id}`,
      apiUrl: "secondary",
    });
    if (status === 401) {
      setTitle("ثبت علاقه مندی");
    }
    if (status === 200) {
      setIsFav((prev) => !prev);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Color Picker */}
      <div className="max-md:flex flex-row-reverse justify-between items-center max-md:mt-4">
        <div className="relative inline-block mb-2 group">
          <button
            onClick={toggleFavorite}
            className="p-2 rounded-full shadow-md text-xl text-red-500 border border-red-500 duration-200"
          >
            {loading ? <BsThreeDots /> : isFav ? <FaHeart /> : <FaRegHeart />}
          </button>
          <Tooltip title="افزودن به علاقه‌مندی‌ها" className="text-base text-white" />
        </div>
        <h3 className="font-medium mb-2 text-xl text-gray-500 dark:text-white text-start">
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
              title={color.title}
              className={cn(
                "w-8 h-8 ring-4 duration-200",
                selectedColorId === color.color_id ? "ring-primary-main" : "ring-transparent"
              )}
            />
          </button>
        ))}
      </div>

      {/* Size Selector */}
      {selectedColor && (
        <div className="mt-6">
          <h3 className="font-medium mb-2 text-xl text-gray-500 dark:text-white text-start">
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
                  onClick={() => isAvailable && setSelectedSizeId(size.stock_id)}
                  className={cn(
                    "px-4 py-2 rounded border text-sm duration-200 dark:text-white",
                    isAvailable
                      ? isSelected
                        ? "bg-primary-main text-white border-primary-main"
                        : "border-gray-400 hover:bg-gray-100"
                      : "border-red-500 !text-red-500 !cursor-not-allowed"
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

      {/* Price and Add to Cart */}
      <div className="mt-10 space-y-4 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          خرید {res.title}
        </h2>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-50">قیمت محصول</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary-main">
              {formatNumberWithCommas(res.after_price)} تومان
            </span>
            {res.discount > 0 && (
              <>
                <span className="line-through text-gray-400 text-base">
                  {formatNumberWithCommas(res.price)} تومان
                </span>
                <span className="text-red-500 font-medium">٪{res.discount}</span>
              </>
            )}
          </div>
        </div>

        {selectedColor && selectedSizeId && (
          <div className="text-xl text-gray-600 dark:text-gray-50 flex items-center gap-3">
            <ColorBox color={selectedColor.color} title={selectedColor.title} />
            رنگ: ({selectedColor.title}) - سایز{" "}
            {selectedColor.sizes.find((s) => s.stock_id === selectedSizeId)?.title}
          </div>
        )}

        <button
          disabled={!selectedColor || !selectedSizeId}
          onClick={() => {
            // await addToCart({ count: 1, stock_id: +selectedSizeId });
          }}
          className={cn(
            "w-full mt-4 text-base font-semibold py-3 rounded-lg duration-200",
            selectedColor && selectedSizeId
              ? "bg-primary-400 hover:bg-primary-main text-white"
              : "bg-gray-200 dark:bg-gray-500 dark:text-gray-200 text-gray-400 !cursor-not-allowed"
          )}
        >
          {res.stock_sum
            ? selectedColor && selectedSizeId
              ? "افزودن به سبد خرید"
              : "انتخاب رنگ و سایز الزامی است"
            : "این محصول ناموجود است"}
        </button>
      </div>

      {title && <LogoutModal title={title} onClose={() => setTitle("")} />}
    </div>
  );
}
