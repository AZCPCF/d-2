import ProductCard from "@/components/pages/products/card";
import { GetByCategoryRequestInterface } from "@/interfaces/pages/category";
import { fetcher } from "@/lib/fetcher";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "پرفروش ترین پوشاک  | فروشگاه پوشاک دی دو",
  keywords: [
    "پرفروش ترین پوشاک مردانه",
    "پرفروش ترین پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function BestSelling() {
  
  const res = await fetcher<GetByCategoryRequestInterface>({
    endpoint: "products",
  });
  return (
    <main className="bg-gray-100 p-10 max-sm:p-4">
      <section className="bg-gray-50 dark:bg-slate-600 p-10 gird grid-cols-1 shadow-md rounded-lg max-sm:p-4">
        <h1 className="text-4xl font-bold text-center text-primary-main p-4 mb-4">
          {"پرفروش ترین پوشاک"}
        </h1>
        <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
          {res.data.map((product, index) => (
            <ProductCard
              key={`categories-product-item-${index}`}
              product={product}
              showColors
            />
          ))}
        </div>
      </section>
    </main>
  );
}
