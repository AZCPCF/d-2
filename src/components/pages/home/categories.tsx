import NextImage from "@/components/ui/image";
import Link from "next/link";

const categories = [
  {
    link: "men-clothes",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/man.jpeg",
      alt: "پوشاک مردانه",
    },
  },
  {
    link: "children-clothes-boys",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/boy.jpeg",
      alt: "پوشاک پسرانه",
    },
  },
  {
    link: "children-clothes-girls",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/girl.jpeg",
      alt: "پوشاک دخترانه",
    },
  },
  {
    link: "shoes-and-sneakers",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/shoes.jpeg",
      alt: "کفش و کتونی",
    },
  },
];

export default function HomePageCategories() {
  return (
    <section className="px-4 py-12 mx-auto">
      <h1 className="text-center text-4xl font-extrabold text-primary-main mb-10">
        فروشگاه پوشاک D2
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-md:gap-3">
        {categories.map((category, index) => (
          <Link
            href={`/categories/${category.link}`}
            key={`home-page-category-${index}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <NextImage
              {...category.image}
              className="transform group-hover:scale-105 transition-transform duration-300 rounded-lg"
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
