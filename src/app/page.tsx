import HomePageAboutUs from "@/components/pages/home/about-us";
import HomePageCategories from "@/components/pages/home/categories";
import HomePageProductsSlider from "@/components/pages/home/products";
import HomePageSlider from "@/components/pages/home/slider";
import HomeStories from "@/components/pages/home/stories";
import { ImageFromApiInterface, ProductInterface } from "@/interfaces";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { fetcher } from "@/lib/fetcher";
export interface HomePageRequestInterface {
  slides: { id: number; link: string; image: ImageFromApiInterface }[];
  stories: {
    id: number;
    title: string;
    type: string;
    link: string;
    image_1: ImageFromApiInterface;
    image_2: ImageFromApiInterface;
  }[];
  special_suggestion: ProductInterface[];
  top_sellers: ProductInterface[];
}
export default async function Home() {
  const res = await fetcher<HomePageRequestInterface>({
    endpoint: "home_page",
  });
  const aboutUsRes = await fetcher<AboutUsRequestInterface>({
    endpoint: "about_us",
  });
  return (
    <main>
      <HomeStories stories={res.stories} />
      <HomePageSlider slides={res.slides} />
      <HomePageCategories />
      <HomePageProductsSlider
        title="پیشنهاد شگفت انگیز"
        href="/incredible-offers"
        products={res.special_suggestion}
      />
      <HomePageAboutUs data={aboutUsRes.data} />
      <HomePageProductsSlider
        href="/top-sellers"
        title="پر فروش ترین ها"
        products={res.top_sellers}
      />
    </main>
  );
}
