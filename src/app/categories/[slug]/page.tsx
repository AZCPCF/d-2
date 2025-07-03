import ProductCard from "@/components/pages/products/card";
import Search from "@/components/ui/search";
import { FilterInterface } from "@/interfaces";
import { GetByCategoryRequestInterface } from "@/interfaces/pages/category";
import { fetcher } from "@/lib/fetcher";

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { slug } = await params;
  const search = await searchParams;
  const res = await fetcher<GetByCategoryRequestInterface>({
    endpoint: "get_products",
    params: {
      page_url: slug,
      ...(search || {}),
      color_ids: JSON.stringify(search?.color_ids?.split(",")),
    },
  });
  console.log(res);
  const filter = await fetcher<FilterInterface>({
    endpoint: `filters/${slug}`,
  });
  return (
    <main className=" p-10 max-sm:p-4">
      <section className="p-10 grid !grid-cols-12 rounded-lg max-sm:p-4 gap-4">
        <h1 className="text-4xl py-10 font-bold text-center text-primary-main p-4 col-span-full">
          {res.category.title}
        </h1>
        <Search colors={filter.colors} sizes={filter.sizes} />
        <div className="col-span-full max-lg:col-span-full">
          <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-3">
            {res.data.map((product, index) => (
              <ProductCard
                key={`categories-product-item-${index}`}
                product={product}
                showColors
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
