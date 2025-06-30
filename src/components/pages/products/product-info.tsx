import { ProductInterface } from "@/interfaces";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProductSelector from "./product-picker";

export default function ProductInfo({res}:{res:ProductInterface}) {
  return (
    <aside className="col-span-4 max-md:col-span-12 max-lg:col-span-6">
      <div className="sticky top-4 max-md:static flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-1 text-sm text-secondary-600">
          {res.categories.reverse().map((category, index, self) => (
            <div className="flex items-center" key={category.id}>
              <Link
                href={`/categories/${category.page_url}`}
                className="hover:underline px-2 py-1 rounded bg-secondary-50 text-base"
              >
                {category.title}
              </Link>
              {index !== self.length - 1 && (
                <IoIosArrowBack className="mx-1 text-gray-400" />
              )}
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-primary-main max-md:text-3xl max-md:mt-4 text-start w-full">
          {res.title}
        </h1>
        <ProductSelector res={res} colorOptions={res.color_size_cache} />
      </div>
    </aside>
  );
}
