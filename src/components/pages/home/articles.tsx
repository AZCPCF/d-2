"use client";

import Link from "next/link";
import NextImage from "@/components/ui/image";
import { ArticleInterface } from "@/interfaces";
import { IoIosArrowBack } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function HomePageArticles({
  articles,
}: {
  articles: ArticleInterface[];
}) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: {
      perView: "auto",
      spacing:  16,
    },
    mode: "free",
  });

  return (
    <section className="px-4 py-16 mx-auto w-full">
      <h1 className="flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative">
        <span>جدیدترین مقالات</span>
        <a
          href={"/articles"}
          className="text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4"
        >
          مشاهده همه
          <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100">
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </a>
      </h1>

      <div ref={sliderRef} className="keen-slider py-6">
        {articles.map((article, index) => (
          <Link
            key={`home-page-article-${index}`}
            href={article.page_url}
            className="keen-slider__slide -m-0.5 !min-w-[250px] !max-w-[250px] flex-shrink-0 group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <NextImage
                {...article.main_image}
                alt={article.main_image.alt || article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 h-36 relative">
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-primary-main transition-colors duration-200 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 absolute bottom-2 left-2">
                {article.date.str}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
