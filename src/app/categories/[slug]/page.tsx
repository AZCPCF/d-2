import ProductCard from "@/components/pages/products/card";
import EmptyData from "@/components/empty-data";
import Search from "@/components/ui/search";
import { FilterInterface, SeoInterface } from "@/interfaces";
import { GetByCategoryRequestInterface } from "@/interfaces/pages/category";
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/utils/cn";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetcher<{ seo_options: SeoInterface }>({
    endpoint: `category_seo_options/${slug}`,
  });
  return res.seo_options;
}

export default async function Category({ params, searchParams }: Props) {
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

  const filter = await fetcher<FilterInterface>({
    endpoint: `filters/${slug}`,
  });

  const hasProducts = res.data.length;

  return (
    <main className={cn("px-6 py-10 max-sm:px-3", !hasProducts && "bg-white")}>
      <section className="mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-primary-main">
          {res.category.title}
        </h1>

        {/* Search Filters */}
        <div className="bg-background rounded-xl shadow-sm p-6">
          <Search colors={filter.colors} sizes={filter.sizes} />
        </div>

        {hasProducts ? (
          <div className="grid grid-cols-5 gap-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {res.data.map((product, index) => (
              <ProductCard
                key={`categories-product-item-${index}`}
                product={product}
                showColors
              />
            ))}
          </div>
        ) : (
          <EmptyData
            title={`محصولی در دسته بندی ${res.category.title} یافت نشد.`}
          />
        )}
      </section>
    </main>
  );
}
