import { cn } from "@/utils/cn";
import { IoIosArrowBack } from "react-icons/io";

export default function HomeProductsSkeleton({
  title = "پیشنهاد شگفت انگیز",
  haveLink = true,
}: {
  title?: string;
  haveLink?: boolean;
}) {
  return (
    <section className="my-20 max-md:my-10">
      <h1 className="flex items-center justify-between flex-wrap gap-4 text-4xl font-extrabold text-primary-main m-10 max-md:m-4 relative">
        <span>{title}</span>
        <a
          className={cn(
            "text-xl max-md:text-base group inline-flex items-center gap-2 font-semibold text-primary-main rounded px-4 py-1 transition max-md:w-full max-md:flex justify-end max-md:p-0 mt-4",
            !haveLink && "hidden"
          )}
        >
          مشاهده همه
          <span
            className={
              "opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 max-md:opacity-100"
            }
          >
            <IoIosArrowBack className="text-[32px] max-md:text-[24px]" />
          </span>
        </a>
      </h1>
      <div className="w-full h-max max-md:h-max flex gap-4 py-8 px-4 overflow-hidden bg-gray-200">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className={cn(
              "w-full bg-white rounded shadow-md p-2 animate-pulse relative flex flex-col",
              index > 3 ? "max-lg:hidden" : "",
              index > 2 ? "max-md:hidden" : "",
              index > 1 ? "max-sm:hidden" : ""
            )}
            key={index}
          >
            <div className="w-full aspect-square bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-3/4 pt-4 max-md:pt-2 mt-4 max-md:mt-2" />
            <div className="w-full flex justify-end mt-4 max-md:mt-2">
              <div className="h-3 bg-gray-300 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
