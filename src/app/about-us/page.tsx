import AboutUsBranches from "@/components/pages/about-us/branches";
import AboutMediaSlider from "@/components/pages/about-us/slider";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما | فروشگاه پوشاک دی دو",
  keywords: [
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};

export default async function AboutUs() {
  const res = await fetcher<AboutUsRequestInterface>({
    endpoint: "about_us",
  });
  const { ParsedNode } = parser(res.data.content);
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-white rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl max-md:text-2xl mb-8 text-center text-primary-main font-bold">
          درباره فروشگاه پوشاک D2
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="w-full">
            <ParsedNode className="px-3" />
          </div>
          <div className="max-md:order-first">
            <AboutMediaSlider
              images={res.data.images}
              poster={res.data.poster}
              video={res.data.video}
            />
          </div>
        </div>
      </section>
      <AboutUsBranches res={res} />
    </main>
  );
}
