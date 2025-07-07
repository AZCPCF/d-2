import ContactUsForm from "@/components/pages/contact-us/form";
import ContactUsLinks from "@/components/pages/contact-us/links";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { fetcher } from "@/lib/fetcher";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "تماس با ما | فروشگاه پوشاک دی دو",
  keywords: [
    "تماس با ما",
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default async function ContactUs() {
  
  const res = await fetcher<AboutUsRequestInterface>({
    endpoint: "about_us",
  });

  return (
    <main className="grid grid-cols-12 max-md:grid-cols-1 gap-4 p-12 max-md:p-4 text-gray-800 bg-gray-100">
      <ContactUsForm />
      <ContactUsLinks res={res} />
    </main>
  );
}
