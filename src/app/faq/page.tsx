import Faqs from "@/components/pages/faq";
import { FaqRequestInterface } from "@/interfaces/pages/faq";
import { fetcher } from "@/lib/fetcher";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "سوالات متداول | فروشگاه پوشاک دی دو",
  keywords: [
    "سوالات متداول",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};

export default async function Faq() {
  const { data: res } = await fetcher<FaqRequestInterface>({ endpoint: "faq" });

  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-background dark:text-white rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl mb-8 text-center text-primary-main font-bold">
          سوالات متداول D2
        </h1>
        <Faqs res={res} />
      </section>
    </main>
  );
}
