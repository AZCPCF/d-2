import { IoIosArrowBack } from "react-icons/io";

export default function HomeAboutUsSkeleton() {
  return (
    <section className="grid max-md:grid-cols-1 grid-cols-2 gap-10 px-4 py-12 bg-white max-full mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-md loading h-96 max-md:h-32"></div>
      <div className="flex flex-col justify-center gap-4 text-right">
        <h1 className="text-4xl font-extrabold text-primary-main leading-tight">
          درباره ما
        </h1>
        {[...Array(4)].map((_, i) => (
          <p
            key={i}
            className={`text-xl text-gray-700 ${
              i === 3 ? "w-8/12" : "w-10/12"
            } h-3 m-1 rounded-lg leading-relaxed sm:text-2xl loading`}
          />
        ))}
        <div className="mt-6 self-end">
          <a className="group inline-flex items-center gap-2 text-primary-main hover:text-primary-dark font-medium text-lg transition-colors">
            مشاهده بیشتر
            <IoIosArrowBack
              className="transition-transform duration-300 group-hover:translate-x-1"
              fontSize={20}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
