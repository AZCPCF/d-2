import ArticleCard from "@/components/pages/articles/card";
import { ArticleInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
// export async function generateMetadata(): Promise<Metadata> {
//   const res = await fetcher<{ seo_options: SeoInterface }>({
//     endpoint: `article_category_seo_options/1`,
//   });
//   return res.seo_options;
// }

export default async function Articles() {
  const { data: res } = await fetcher<{
    data: ArticleInterface[];
    category: string;
  }>({
    endpoint: "articles_filter",
  });
  return (
    <main className="bg-gray-200/75 p-10 max-sm:p-4 flex flex-col gap-10">
      <section
        className={`bg-gray-50 dark:bg-slate-600 p-10 grid grid-cols-1 shadow-md rounded-lg max-sm:p-4`}
      >
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center text-primary-main p-4 tracking-wide`}
        >
          مقالات D2
        </h1>
        <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
          {res.data.map((article, index) => (
            <div
              className="rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              key={`articles-hub-item-${index}`}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
