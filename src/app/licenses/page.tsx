import LicenseGallery from "@/components/pages/licenses/gallery";
import { LicenseInterface } from "@/interfaces";

import { fetcher } from "@/lib/fetcher";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "گواهی نامه ها | فروشگاه پوشاک دی دو",
  keywords: [
    "گواهی نامه ها",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function Licenses() {
  const res = await fetcher<{ data: LicenseInterface[] }>({
    endpoint: "licenses",
  });

  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl max-sm:text-3xl font-bold text-center text-primary-main p-6">
          گواهی نامه ها
        </h1>

        <LicenseGallery licenses={res.data} />
      </section>
    </main>
  );
}
