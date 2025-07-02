import HomePageAboutUs from "@/components/pages/home/about-us";
import HomePageArticles from "@/components/pages/home/articles";
import HomePageCategories from "@/components/pages/home/categories";
import HomePageProductsSlider from "@/components/pages/home/products";
import HomePageSlider from "@/components/pages/home/slider";
import HomeStories from "@/components/pages/home/stories";
import { HomePageRequestInterface } from "@/interfaces/pages/home";
import { fetcher } from "@/lib/fetcher";

export default async function Home() {
  const res = await fetcher<HomePageRequestInterface>({
    endpoint: "home_page",
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
        <HomePageAboutUs />
        <HomePageProductsSlider
          href="/best-selling"
          primary={false}
          title="پر فروش ترین ها"
          products={res.top_sellers}
        />
        <HomePageArticles articles={res.articles} />
      </main>
  );
}
