import RedirectLink from "@/components/ui/link/redirect-link";
import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";
import { TbLicense } from "react-icons/tb";
import { VscLaw } from "react-icons/vsc";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "قوانین سایت | فروشگاه پوشاک دی دو",
  keywords: [
    "قوانین سایت",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function Rules() {
  
  const res = await fetcher<{ data: { rules: string } }>({
    endpoint: "privacy_rules",
  });

  const { ParsedNode } = parser(res.data.rules);
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-background dark:text-white rounded-xl shadow-sm mb-6">
        <h1 className="flex items-center gap-3 max-sm:text-3xl text-4xl font-extrabold text-primary-main border-b border-gray-200 px-6 py-4">
          <VscLaw />
          قوانین سایت
        </h1>
        <ParsedNode className="[&_*]:!text-xl max-md:[&_*]:!text-lg" />
      </section>

      <RedirectLink
        href="/licenses"
        title={
          <>
            <TbLicense />
            برای مشاهده گواهی نامه ها کلیک کنید.
          </>
        }
      />
    </main>
  );
}
