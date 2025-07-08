import ArticleCardSkeleton from "@/components/loading/ui/article-card";

export default function ArticlesLoading() {
  return (
    <main className="bg-gray-200/75 p-10 max-sm:p-4 flex flex-col gap-10">
      <section className="bg-background p-10 grid grid-cols-1 shadow-md rounded-lg max-sm:p-4">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-center text-primary-main tracking-wide loading">
            مقالات D2
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <ArticleCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
