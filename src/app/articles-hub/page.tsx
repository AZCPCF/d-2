import ArticleCard from "@/components/pages/articles/card";
import { ArticleInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";

export default async function ArticlesHub() {
  const res = await fetcher<{
    important: ArticleInterface[];
    other: ArticleInterface[];
    other_important: ArticleInterface[];
  }>({
    endpoint: "articles_page",
  });

  const sections = [
    {
      title: "جدید ترین مقالات مد و پوشاک",
      data: res.important,
      bg: "bg-gray-50",
      text: "text-primary-main",
    },
    {
      title: "مقالات منتخب پوشاک",
      data: res.other_important,
      bg: "bg-primary-400",
      text: "text-secondary-main",
    },
    {
      title: "سایر مقالات",
      data: res.other,
      bg: "bg-secondary-400",
      text: "text-primary-main",
    },
  ];

  return (
    <main className="bg-gray-200/75 p-10 max-sm:p-4 flex flex-col gap-10">
      {sections.map((section, i) => (
        <section
          key={i}
          className={`${section.bg} p-10 grid grid-cols-1 shadow-md rounded-lg max-sm:p-4`}
        >
          <h1
            className={`text-3xl sm:text-4xl font-bold text-center ${section.text} p-4 tracking-wide`}
          >
            {section.title}
          </h1>
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
