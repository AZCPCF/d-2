import HomeAboutUsSkeleton from "@/components/loading/home/about-us";
import HomePageArticlesSkeleton from "@/components/loading/home/articles";
import HomeCategoriesSkeleton from "@/components/loading/home/categories";
import HomeProductsSkeleton from "@/components/loading/home/products";
import HomeSliderSkeleton from "@/components/loading/home/slider";
import HomeStoriesSkeleton from "@/components/loading/home/stories";
export default function HomeLoading() {
  return (
    <main>
      <HomeStoriesSkeleton />
      <HomeSliderSkeleton />
      <HomeCategoriesSkeleton />
      <HomeProductsSkeleton />
      <HomeAboutUsSkeleton />
      <HomeProductsSkeleton title="پر فروش ترین ها" />
      <HomePageArticlesSkeleton />
    </main>
  );
}
