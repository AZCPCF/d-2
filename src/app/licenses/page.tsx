import LicenseGallery from "@/components/pages/licenses/gallery";
import { LicenseInreface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";

export default async function Licenses() {
  

  const res = await fetcher<{ data: LicenseInreface[] }>({
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
