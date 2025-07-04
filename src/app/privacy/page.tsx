import RedirectLink from "@/components/ui/link/redirect-link";
import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";
import { BiInfoCircle } from "react-icons/bi";
import { VscLaw } from "react-icons/vsc";

export default async function Privacy() {
  
  const res = await fetcher<{ data: { privacy: string } }>({
    endpoint: "privacy_rules",
  });

  const { ParsedNode } = parser(res.data.privacy);
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-white rounded-xl shadow-sm mb-6">
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
