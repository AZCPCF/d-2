import HomePageCategories from "@/components/pages/home/categories";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "دسته بندی محصولات | فروشگاه پوشاک دی دو",
  keywords: [
    "دسته بندی محصولات مردانه",
    "دسته بندی محصولات بچگانه",
    "فروشگاه اینترنتی پوشاک",
    "فروشگاه پوشاک دی دو",
  ],
};
export default function Categories() {
  return (
    <main>
      <HomePageCategories title="دسته بندی محصولات D2" />
    </main>
  );
}
