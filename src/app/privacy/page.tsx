import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";
import { BiInfoCircle } from "react-icons/bi";
import { VscLaw } from "react-icons/vsc";
import { Metadata } from "next";
import RedirectLink from "@/components/link/redirect-link";
export const metadata: Metadata = {
  title: "حریم خصوصی | فروشگاه پوشاک دی دو",
  keywords: [
    "حریم خصوصی",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function Privacy() {
  const { data: res } = await fetcher<{ data: { privacy: string } }>({
    endpoint: "privacy_rules",
  });

  const { ParsedNode } = parser(res.data.privacy);
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-background dark:text-white rounded-xl shadow-sm mb-6">
        <h1 className="flex items-center gap-3 max-sm:text-3xl text-4xl font-extrabold text-primary-main border-b border-gray-200 px-6 py-4">
          <BiInfoCircle />
          حریم خصوصی D2
        </h1>
        <ParsedNode className="[&_*]:!text-xl max-md:[&_*]:!text-lg" />
      </section>

      <RedirectLink
        href="/rules"
        title={
          <>
            <VscLaw />
            برای مشاهده قوانین سایت کلیک کنید.
          </>
        }
      />
    </main>
  );
}
