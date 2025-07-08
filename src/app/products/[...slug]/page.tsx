import HomePageProductsSlider from "@/components/pages/home/products";
import ProductDescription from "@/components/pages/products/product-description";
import ProductImages from "@/components/pages/products/product-images";
import ProductInfo from "@/components/pages/products/product-info";
import { ProductInterface, SeoInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { Metadata } from "next";
type Props = {
  params: Promise<{ slug: string[] }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetcher<{ seo_options: SeoInterface }>({
    endpoint: `product_seo_options/${slug[0]}`,
  });
  return res.seo_options;
}

export default async function Product({ params }: Props) {
  const { slug } = await params;
  const res = await fetcher<ProductInterface>({
    endpoint: `products/${slug[0]}`,
  });

  return (
    <main className="bg-gray-100 py-10 px-8 max-sm:px-4">
      <section className="bg-background px-6 py-10 grid grid-cols-12 gap-8 max-md:gap-6 shadow-md rounded-lg max-sm:px-4 max-sm:py-6 mb-10">
        <ProductImages res={res} />
        <ProductDescription res={res} />
        <ProductInfo res={res} />
      </section>

      <HomePageProductsSlider
        disableButtons
        haveLink={false}
        title="محصولات مشابه"
        products={res.similar}
      />
    </main>
  );
}
