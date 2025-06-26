import NextImage from "@/components/ui/image";
import Link from "next/link";

const categories = [
  {
    link: "men-clothes",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/man.jpeg",
      alt: "لباس مردانه",
    },
  },
  {
    link: "children-clothes-boys",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/boy.jpeg",
      alt: "بچگانه پسرانه",
    },
  },
  {
    link: "children-clothes-girls",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/girl.jpeg",
      alt: "بچگانه دخترانه",
    },
  },
  {
    link: "shoes-and-sneakers",
    image: {
      width: 1200,
      height: 750,
      url: "/images/categories/shoes.jpeg",
      alt: "کتونی مردانه",
    },
  },
];
export default function HomePageCategories() {
  return (
    <section className="grid grid-cols-4 max-md:gap-2 gap-5 p-10 max-md:grid-cols-2 max-md:px-4">
      <h1 className="text-5xl max-lg:text-3xl max-lg:p-4 p-12 text-primary-main col-span-full">
        فروشگاه پوشاک D2
      </h1>
      {categories.map((category, index) => (
        <Link
          href={`/categories/${category.link}`}
          key={`home-page-category-${index}`}
          className="shadow-xl rounded-lg"
        >
          <NextImage {...category.image} className="rounded-lg" />
        </Link>
      ))}
    </section>
  );
}
