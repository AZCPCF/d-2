"use client";

import { addToCart } from "@/actions/add-cart";
import { toggleReminder } from "@/actions/add-reminder";
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
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { ColorBox } from "./color-box";

interface Props {
  res: ProductInterface;
  colorOptions: (ColorInterface & { sizes: SizeInterface[] })[];
}

export default function ProductSelector({ colorOptions, res }: Props) {
  const favorites = useMemo(
    () => JSON.parse(res.favorites) as number[],
    [res.favorites]
  );
  const initialColorId = colorOptions[0]?.color_id;

  const [selectedColorId, setSelectedColorId] = useState(initialColorId);
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [cartItems, setCartItems] = useState<
    { stock_id: number; id: number; count: number }[]
  >([]);
  const [reminder, setReminder] = useState(false);

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
    setReminder(res.reminders.includes(user?.id));
  }, [user?.id, res.reminders]);
  useEffect(() => {
    if (selectedColor?.sizes?.length) {
      const firstAvailableSize = selectedColor.sizes.find((s) => s.stock > 0);
      setSelectedSizeId(firstAvailableSize?.stock_id || null);
    } else {
      setSelectedSizeId(null);
    }
  }, [selectedColor]);
  const fetch = async () => {
    const res = await fetcher<{
      product: { stock_id: number; id: number; count: number }[];
    }>({
      endpoint: "user/cart",
      apiUrl: "secondary",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-store",
      },
    });
    if (res.data.product) {
      setCartItems(res.data.product);
    }
  };
  useEffect(() => {
    fetch();
  }, [user]);
  const existingCartItem = cartItems.find(
    (item) => item.stock_id === Number(selectedSizeId)
  );

  const toggleFavorite = async () => {
    setLoading(true);
    const { status,data } = await fetcher({
      endpoint: `user/favorite/${res.id}`,
      apiUrl: "secondary",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-store",
      },
    });
    if (status === 401) {
      setTitle("ثبت علاقه مندی");
    }
    if (status === 200) {
      setIsFav((prev) => !prev);
    }
    setLoading(false);
  };

  const handleToggleReminder = async () => {
    const _res = await toggleReminder(res.id);
    if (_res.success) {
      setReminder((prev) => !prev);
      toast.success(reminder ? "یادآوری لغو شد" : "یادآوری فعال شد");
    }
  };

  return (
    <div>
      <div className="max-md:flex flex-row-reverse justify-between items-center max-md:mt-4">
        <div className="relative inline-block mb-2 group">
          <button
            onClick={toggleFavorite}
            className="p-2 rounded-full shadow-md text-xl text-red-500 border border-red-500 duration-200"
            disabled={loading}
          >
            {loading ? <BsThreeDots /> : isFav ? <FaHeart /> : <FaRegHeart />}
          </button>
          <Tooltip
            title="افزودن به علاقه‌مندی‌ها"
            className="text-base text-white"
          />
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
                selectedColorId === color.color_id
                  ? "ring-primary-main"
                  : "ring-transparent"
              )}
            />
          </button>
        ))}
      </div>
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
                  onClick={() =>
                    isAvailable && setSelectedSizeId(size.stock_id)
                  }
                  className={cn(
                    "px-4 py-2 rounded border text-sm duration-200 dark:text-white",
                    isAvailable
                      ? isSelected
                        ? "bg-primary-main text-white border-primary-main"
                        : "border-gray-400 hover:bg-gray-300"
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
                <span className="text-red-500 font-medium">
                  ٪{res.discount}
                </span>
              </>
            )}
          </div>
        </div>

        {selectedColor && selectedSizeId && (
          <div className="text-xl text-gray-600 dark:text-gray-50 flex items-center gap-3">
            <ColorBox color={selectedColor.color} title={selectedColor.title} />
            رنگ: ({selectedColor.title}) - سایز{" "}
            {
              selectedColor.sizes.find((s) => s.stock_id === selectedSizeId)
                ?.title
            }
          </div>
        )}
        {res.stock_sum ? (
          selectedColor && selectedSizeId ? (
            existingCartItem ? (
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={async () => {
                    if (existingCartItem.count === 1) {
                      // حذف آیتم وقتی تعداد به 0 میرسه
                      const resRemove = await addToCart({
                        stock_id: +selectedSizeId,
                        count: 0,
                      });
                      if (resRemove.success) {
                        setCartItems((prev) =>
                          prev.filter(
                            (item) => item.stock_id !== +selectedSizeId
                          )
                        );
                      } else {
                        toast.error("خطا در حذف محصول از سبد خرید");
                      }
                    } else {
                      // کم کردن تعداد
                      const newCount = existingCartItem.count - 1;
                      const resDec = await addToCart({
                        stock_id: +selectedSizeId,
                        count: newCount,
                      });
                      if (resDec.success) {
                        setCartItems((prev) =>
                          prev.map((item) =>
                            item.stock_id === +selectedSizeId
                              ? { ...item, count: newCount }
                              : item
                          )
                        );
                      } else {
                        toast.error("خطا در بروزرسانی تعداد محصول");
                      }
                    }
                  }}
                  className={cn(
                    "px-4 py-2 bg-gray-200 text-primary-main dark:bg-gray-500 rounded",
                    existingCartItem.count === 1 && "text-red-500 "
                  )}
                >
                  {existingCartItem.count === 1 ? <FaTrash /> : <BiMinus />}
                </button>

                <span className="text-primary-main">
                  {existingCartItem.count}
                </span>

                <button
                  onClick={async () => {
                    const sizeStock = selectedColor?.sizes.find(
                      (s) => s.stock_id === +selectedSizeId
                    )?.stock;

                    if (
                      sizeStock !== undefined &&
                      existingCartItem.count < sizeStock
                    ) {
                      const newCount = existingCartItem.count + 1;
                      const resInc = await addToCart({
                        stock_id: +selectedSizeId,
                        count: newCount,
                      });
                      if (resInc.success) {
                        setCartItems((prev) =>
                          prev.map((item) =>
                            item.stock_id === +selectedSizeId
                              ? { ...item, count: newCount }
                              : item
                          )
                        );
                      } else {
                        toast.error("خطا در بروزرسانی تعداد محصول");
                      }
                    }
                  }}
                  disabled={
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    selectedColor?.sizes.find(
                      (s) => s.stock_id === +selectedSizeId
                    )?.stock! <= existingCartItem.count
                  }
                  className={cn(
                    "px-4 py-2 rounded",
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    selectedColor?.sizes.find(
                      (s) => s.stock_id === +selectedSizeId
                    )?.stock! > existingCartItem.count
                      ? "bg-primary-main text-white"
                      : "bg-gray-200 text-primary-main dark:bg-gray-500 !cursor-not-allowed"
                  )}
                >
                  <BiPlus />
                </button>
              </div>
            ) : (
              <button
                onClick={async () => {
                  const resAdd = await addToCart({
                    count: 1,
                    stock_id: +selectedSizeId,
                  });
                  if (resAdd.success) {
                    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
                    setCartItems((prev) => [
                      ...prev,
                      { stock_id: +selectedSizeId, count: 1, id: res.id },
                    ]);
                  } else {
                    toast.error("خطا در افزودن محصول به سبد خرید");
                  }
                }}
                className="w-full mt-4 bg-primary-400 hover:bg-primary-main text-white font-semibold py-3 rounded-lg"
              >
                افزودن به سبد خرید
              </button>
            )
          ) : (
            <button
              disabled
              className="w-full mt-4 bg-gray-200 dark:bg-gray-500 text-gray-400 py-3 rounded-lg"
            >
              انتخاب رنگ و سایز الزامی است
            </button>
          )
        ) : (
          <div className="mt-4 space-y-2">
            <p className="text-center text-red-500 font-semibold">
              این محصول ناموجود است
            </p>
            <button
              onClick={handleToggleReminder}
              className="w-full py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-medium"
            >
              {reminder
                ? "لغو یادآوری زمانی که موجود شد"
                : "یادآوری زمانی که موجود شد"}
            </button>
          </div>
        )}
      </div>

      {title && <LogoutModal title={title} onClose={() => setTitle("")} />}
    </div>
  );
}
