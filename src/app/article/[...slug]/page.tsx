import NextImage from "@/components/ui/image";
import { ShareButton } from "@/components/ui/share-button";
import { ArticleInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetcher<ArticleInterface>({
    endpoint: `article/${slug[0]}`,
  });
  const { ParsedNode } = parser(res.text);
  return (
    <main className="bg-gray-200/75 py-10 px-8 max-sm:px-4">
      <section className="grid-cols-12 grid gap-4">
        <div className="col-span-8 max-md:col-span-full rounded-xl gird grid-cols-1 bg-white relative shadow-md">
          <div className="w-full flex items-center justify-center px-6 pt-6 mt-6">
            <h1 className="text-3xl font-bold max-md:text-2xl pt-8 text-primary-main text-center">
              {res.title}
            </h1>
            <div className="absolute left-2 top-2 flex gap-2">
              <ShareButton url={`/article/${res.page_url}`} />
              <p className="ml-auto px-4 py-2 text-sm font-medium text-gray-400 border-2 border-primary-main rounded-md">
                {res.date.str}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center py-10 px-8 max-md:px-4">
            <NextImage
              alt={res.title}
              {...res.main_image}
              className="rounded-xl sm:max-h-[600px]"
            />
          </div>
          <ParsedNode />
        </div>
        <div className="col-span-4 max-md:col-span-full">
          <div className="sticky top-4 bg-white rounded-xl shadow-md p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-2 max-md:text-xl">
              مقالات مشابه
            </h2>
            {res.similar.map((item) => (
              <a
                key={item.id}
                href={`/article/${item.page_url}`}
                className="flex items-start gap-4 border-b last:border-0 pb-3 hover:bg-gray-100 duration-200 rounded-md rounded-b-none p-2"
              >
                <NextImage
                  alt={item.title}
                  {...item.main_image}
                  className="max-w-[96px] max-h-[96px] h-auto object-contain rounded"
                />

                <div className="flex flex-col justify-between text-sm">
                  <p className="text-primary-main font-medium line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{item.date.str}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
