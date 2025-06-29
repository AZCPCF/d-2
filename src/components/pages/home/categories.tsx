import NextImage from "@/components/ui/image";
import { categoriesLinks } from "@/static";
import Link from "next/link";

export default function HomePageCategories({
  title = "فروشگاه پوشاک D2",
}: {
  title?: string;
}) {
  return (
    <section className="px-4 py-12 mx-auto">
      <h1 className="text-center text-4xl font-extrabold text-primary-main mb-10">
        {title}
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-md:gap-3">
        {categoriesLinks.map((category, index) => (
          <Link
            href={`/categories/${category.link}`}
            key={`home-page-category-${index}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <NextImage
              alt={`دسته بندی ${index + 1}`}
              {...category.image}
              className="transform group-hover:scale-110 transition-transform duration-300 rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            <p className="absolute bottom-3 left-3 max-md:left-1.5 max-md:bottom-1.5 text-white text-lg max-md:text-sm font-semibold z-10 drop-shadow-md">
              {category.image.alt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
