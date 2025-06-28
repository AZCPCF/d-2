import { fetcher } from "@/lib/fetcher";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export default async function Faq() {
  const res = await fetcher<{ data: FAQItem[] }>({ endpoint: "faq" });
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-white rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl mb-8 text-center text-primary-main font-bold">
          سوالات متداول D2
        </h1>
        <ul className="space-y-6">
          {res.data.map((item, index) => (
            <li key={`faq-item${index}`}>
              <div className="group">
                <details
                  className="group border rounded-md p-4 transition-colors 
                 group-[.group]:open:border-primary-main border-gray-300"
                >
                  <summary className="font-medium text-xl cursor-pointer group-open:text-primary-main max-md:text-lg">
                    {item.question}
                  </summary>
                  <div className="mt-2 text-secondary-main text-lg max-md:text-base">
                    {item.answer}
                  </div>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
