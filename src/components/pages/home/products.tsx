"use client";

import { ProductInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "../products/card";

interface Props {
  products: ProductInterface[];
  title?: string;
  href?: string;
  primary?: boolean;
  haveLink?: boolean;
  disableButtons?: boolean;
}

export default function HomePageProductsSlider({
  products,
  title = "پیشنهاد شگفت انگیز",
  href = "/incredible-offers",
  primary = true,
  disableButtons = false,
  haveLink = true,
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
    <section className={cn("my-20 max-md:my-10 px-4 rounded-xl", !products.length && "hidden")}>
      <h1 className={cn("flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative")}>
        <span>{title}</span>
        <Link
          href={href}
          className={cn(
            "text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4",
            !haveLink && "hidden"
          )}
        >
          مشاهده همه
          <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100">
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </Link>
      </h1>

      <div
        ref={sliderRef}
        className={cn(
          "keen-slider rounded-t-xl",
          primary ? "bg-primary-300" : "bg-secondary-300",
          disableButtons && "py-2"
        )}
      >
        {products.map((product, index) => (
          <div
            key={`home-special-suggestion-product-${index}`}
            className="keen-slider__slide min-h-max p-2"
          >
            <ProductCard product={product} className="hover:scale-100" />
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex justify-end items-center rounded-b-xl gap-4 p-6 bg-primary-300",
          primary
            ? "bg-primary-300 text-primary-main"
            : "bg-secondary-300 text-secondary-main",
          disableButtons && "hidden"
        )}
      >
        <button
          onClick={() => instanceRef.current?.prev()}
          className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
        >
          <IoIosArrowForward className="text-2xl" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
      </div>
    </section>
  );
}
