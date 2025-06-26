import HomePageCategories from "@/components/pages/home/categories";
import HomePageSlider from "@/components/pages/home/slider";
import HomeStories from "@/components/pages/home/stories";
import { ImageFromApiInterface } from "@/interfaces";
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
}
export default async function Home() {
  const res = await fetcher<HomePageRequestInterface>({
    endpoint: "home_page",
  });
  return (
    <main>
      <HomeStories stories={res.stories} />
      <HomePageSlider slides={res.slides} />
      <HomePageCategories />
    </main>
  );
}
