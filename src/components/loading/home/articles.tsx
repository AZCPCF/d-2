import { IoIosArrowBack } from "react-icons/io";
import ArticleCardSkeleton from "../ui/article-card";

export default function HomePageArticlesSkeleton() {
  return (
    <section className="px-4 py-16 mx-auto w-full">
      <h1 className="flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative">
        <span>جدیدترین مقالات</span>
        <span className="text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4">
          مشاهده همه
          <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100">
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </span>
      </h1>

      <div className="flex gap-4 py-6 overflow-x-auto scrollbar-none">
        {Array.from({ length: 3 }).map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
