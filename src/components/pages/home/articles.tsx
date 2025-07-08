"use client";

import { ArticleInterface } from "@/interfaces";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { IoIosArrowBack } from "react-icons/io";
import ArticleCard from "../articles/card";
import Link from "next/link";

export default function HomePageArticles({
  articles,
}: {
  articles: ArticleInterface[];
}) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: { spacing: 16, perView: "auto" },
  });

  return (
    <section className="px-4 py-16 mx-auto w-full">
      <h2 className="flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative">
        <span>جدیدترین مقالات</span>
        <Link
          href={"/articles-hub"}
          className="text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4"
        >
          مشاهده همه
          <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100">
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </Link>
      </h2>

      <div ref={sliderRef} className="keen-slider py-6">
        {articles.map((article, index) => (
          <div
            key={`home-page-article-${index}`}
            className="keen-slider__slide -m-0.5 !min-w-[250px] !max-w-[250px] rounded-lg shadow-md hover:shadow-lg"
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
