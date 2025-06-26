import NextImage from "@/components/ui/image";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function HomePageAboutUs({ data }: AboutUsRequestInterface) {
  console.log(data.poster);
  return (
    <section className="grid max-md:grid-cols-1 grid-cols-2 gap-8 max-sm:gap-4 px-4 py-8 max-sm:px-4 bg-white">
      <div className="overflow-hidden rounded-xl">
        <NextImage
          {...data.poster}
          alt={data.poster.alt || "درباره ما"}
          className="w-full h-full object-cover transition-transform duration-500 aspect-video"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 text-center md:text-right">
        <h1 className="text-5xl max-md:text-3xl max-lg:text-4xl font-extrabold text-primary-main leading-tight">
          درباره ما
        </h1>
        <p className="text-gray-600 max-sm:text-lg text-xl leading-relaxed max-md:text-right">
          {data.content}
        </p>
        <div className="max-sm:mt-2 mt-4 self-end">
          <Link
            href="/about-us"
            className="group inline-flex items-center gap-2 text-primary-main hover:text-primary-dark font-semibold text-lg transition"
          >
            مشاهده بیشتر
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <IoIosArrowBack fontSize={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
