import Galleries from "@/components/pages/gallery";
import { GalleryRequestInterface } from "@/interfaces/pages/gallery";
import { fetcher } from "@/lib/fetcher";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "گالری تصاویر | فروشگاه پوشاک دی دو",
  keywords: [
    "گالری تصاویر",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};

export default async function Page() {
  

  const res = await fetcher<GalleryRequestInterface>({ endpoint: "galleries" });
  return (
    <main className="bg-gray-100 p-10 max-md:p-4">
      <section className="bg-white p-10 max-md:p-4 rounded-lg grid grid-cols-4 max-md:grid-cols-2 gap-3 shadow-md">
        <h1 className="text-4xl text-primary-main font-bold col-span-full p-4 text-center">
          گالری تصاویر D2
        </h1>
        <Galleries res={res} />
      </section>
    </main>
  );
}
