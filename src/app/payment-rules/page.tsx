import { fetcher } from "@/lib/fetcher";
import { parser } from "@/utils/parser";
import { BiInfoCircle, BiShoppingBag } from "react-icons/bi";
import { Metadata } from "next";
import RedirectLink from "@/components/link/redirect-link";
export const metadata: Metadata = {
  title: "نحوه ثبت سفارش | فروشگاه پوشاک دی دو",
  keywords: [
    "نحوه ثبت سفارش",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function PaymentRules() {
  const { data: res } = await fetcher<{ data: { text: string } }>({
    endpoint: "how_to_order",
    apiUrl: "secondary",
  });

  const { ParsedNode } = parser(res.data.text);

  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-background dark:text-white rounded-xl shadow-sm mb-6">
        <h1 className="flex gap-3 items-center max-sm:text-3xl text-4xl font-extrabold text-primary-main border-b border-gray-200 px-6 py-4">
          <BiShoppingBag />
          نحوه ثبت سفارش
        </h1>
        <ParsedNode />
      </section>

      <RedirectLink
        href="/about-us"
        title={
          <>
            <BiInfoCircle />
            برای مشاهده درباره ما کلیک کنید.
          </>
        }
      />
    </main>
  );
}
