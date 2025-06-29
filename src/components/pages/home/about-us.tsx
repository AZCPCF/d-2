"use client";
import NextImage from "@/components/ui/image";
import { useClientCtx } from "@/contexts/client-context";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function HomePageAboutUs() {
  const { aboutUs } = useClientCtx();
  return (
    <section className="grid max-md:grid-cols-1 grid-cols-2 gap-10 px-4 py-12 bg-white max-full mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-md group">
        {aboutUs?.poster?.url ? (
          <NextImage
            {...aboutUs?.poster}
            alt={aboutUs?.poster.alt || "درباره ما"}
            className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
          />
        ) : undefined}
      </div>
      <div className="flex flex-col justify-center gap-6 text-right">
        <h1 className="text-4xl font-extrabold text-primary-main leading-tight">
          درباره ما
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed sm:text-2xl">
          {aboutUs?.content}
        </p>
        <div className="mt-6 self-end">
          <Link
            href="/about-us"
            className="group inline-flex items-center gap-2 text-primary-main hover:text-primary-dark font-medium text-lg transition-colors"
          >
            مشاهده بیشتر
            <IoIosArrowBack
              className="transition-transform duration-300 group-hover:translate-x-1"
              fontSize={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
