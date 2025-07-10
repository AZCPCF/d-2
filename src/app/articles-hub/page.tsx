import ArticleCard from "@/components/pages/articles/card";
import { ArticleInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/utils/cn";
export const metadata = {
  title: "مقالات | فروشگاه پوشاک دی دو",
  keywords: [
    "مقالات پوشاک مردانه",
    "مقالات پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function ArticlesHub() {
  const { data: res } = await fetcher<{
    important: ArticleInterface[];
    other: ArticleInterface[];
    other_important: ArticleInterface[];
  }>({
    endpoint: "articles_page",
  });

  const sections = [
    {
      id: 1,
      title: "جدید ترین مقالات مد و پوشاک",
      data: res.important,
    },
    {
      id: 2,
      title: "مقالات منتخب پوشاک",
      data: res.other_important,
    },
    {
      id: 3,
      title: "سایر مقالات",
      data: res.other,
    },
  ];

  return (
    <main className="max-sm:p-4 flex flex-col">
      {sections.map((section, i) => (
        <section
          key={i}
          className={cn(
            `dark:bg-slate-600 shadow-md p-10 grid grid-cols-1 max-sm:p-4`,
            section.id == 2 && "!bg-primary-400"
          )}
        >
          <div className="text-center pb-8">
            <h1
              className={cn(
                "max-sm:text-3xl text-4xl font-bold text-primary-main",
                section.id == 2 && "text-white"
              )}
            >
              {section.title}
            </h1>
            <p
              className={cn(
                "text-gray-500 text-md",
                section.id == 2 && "text-gray-100"
              )}
            >
              مشاهده مقالات منتخب این دسته برای آشنایی بیشتر با سبک‌ها، برندها و
              ترندهای روز.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1">
            {section.data.map((article, index) => (
              <div
                className="rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                key={`articles-hub-item-${index}`}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
