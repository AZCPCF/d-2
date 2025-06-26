"use client";

import NextImage from "@/components/ui/image";
import { ProductInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { formatNumberWithCommas } from "@/utils/formater";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  products: ProductInterface[];
  title?: string;
  href?: string;
}

export default function HomePageProductsSlider({
  products,
  title,
  href,
}: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: { spacing: 5, perView: 2 },
    breakpoints: {
      "(min-width: 480px)": { slides: { perView: 3, spacing: 5 } },
      "(min-width: 768px)": { slides: { perView: 5, spacing: 5 } },
      "(min-width: 1024px)": { slides: { perView: 6, spacing: 5 } },
      "(min-width: 1280px)": { slides: { perView: 8, spacing: 5 } },
    },
  });

  if (!products || products.length === 0) return null;

  return (
    <section className="my-20 max-md:my-10">
      <h1 className="flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative">
        <span>{title || "پیشنهاد شگفت انگیز"}</span>
        <a
          href={href || "/incredible-offers"}
          className="text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4"
        >
          مشاهده همه
          <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100">
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </a>
      </h1>

      <div ref={sliderRef} className="keen-slider bg-primary-300">
        {products.map((product, index) => (
          <div
            key={`home-special-suggestion-product-${index}`}
            className="keen-slider__slide min-h-max p-2"
          >
            <a
              href={product.page_url}
              className="block bg-white shadow-md rounded min-h-max"
            >
              <NextImage
                alt={`product-slide-special-suggestion-${product.id}`}
                {...product.image_1}
                className="w-full aspect-square rounded-t"
              />
              <div className="flex flex-col justify-between h-[100px] p-2 text-left">
                <h3 className="text-sm font-semibold line-clamp-2 text-right">
                  {product.title}
                </h3>

                <div>
                  {product.discount ? (
                    <div className="text-sm text-gray-800">
                      {formatNumberWithCommas(product.price)} تومان
                    </div>
                  ) : undefined}
                  <div
                    className={cn(
                      "text-base font-bold",
                      !product.discount ? "text-gray-800" : "text-red-500"
                    )}
                  >
                    {formatNumberWithCommas(product.after_price)} تومان
                  </div>
                  {product.discount ? (
                    <span className="text-green-600 text-xs">
                      تخفیف {product.discount}%
                    </span>
                  ) : undefined}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-4 p-6 bg-primary-300">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
        >
          <IoIosArrowForward className="text-2xl text-primary-main" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
        >
          <IoIosArrowBack className="text-2xl text-primary-main" />
        </button>
      </div>
    </section>
  );
}
