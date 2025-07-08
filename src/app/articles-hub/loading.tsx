import ArticleCardSkeleton from "@/components/loading/ui/article-card";

const fakeSections = [
  "جدید ترین مقالات مد و پوشاک",
  "مقالات منتخب پوشاک",
  "سایر مقالات",
];

export default function ArticlesHubLoading() {
  return (
    <main className="bg-gray-200/75 p-10 max-sm:p-4 flex flex-col gap-10">
      {fakeSections.map((title, i) => (
        <section
          key={i}
          className="bg-background p-10 grid grid-cols-1 shadow-md rounded-lg max-sm:p-4"
        >
          <div className="text-center pb-8">
            <h1 className="max-sm:text-3xl text-4xl font-bold text-primary-main animate-pulse">
              {title}
            </h1>

            <p className="text-gray-500 text-md">
              مشاهده مقالات منتخب این دسته برای آشنایی بیشتر با سبک‌ها، برندها و
              ترندهای روز.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <ArticleCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
