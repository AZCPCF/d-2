import Faqs from "@/components/pages/faq";
import { FaqRequestInterface } from "@/interfaces/pages/faq";
import { fetcher } from "@/lib/fetcher";

export default async function Faq() {
  const res = await fetcher<FaqRequestInterface>({ endpoint: "faq" });

  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-white rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl mb-8 text-center text-primary-main font-bold">
          سوالات متداول D2
        </h1>
        <Faqs res={res} />
      </section>
    </main>
  );
}
