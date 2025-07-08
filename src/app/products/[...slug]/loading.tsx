import HomeProductsSkeleton from "@/components/loading/home/products";

export default function ProductLoading() {
  return (
    <main className="bg-gray-100 py-10 px-8 max-sm:px-4">
      {/* Product Info + Description + Images */}
      <section className="bg-background px-6 py-10 grid grid-cols-12 gap-8 max-md:gap-6 shadow-md rounded-lg max-sm:px-4 max-sm:py-6 mb-10 animate-pulse">
        {/* Left Column – Product Info */}
        <aside className="col-span-4 max-md:col-span-12 max-lg:col-span-6 space-y-4">
          <div className="flex gap-4 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 loading h-6"></div>
            ))}
          </div>
          <div className="h-10 w-3/4 bg-gray-300 rounded" />
          <div className="h-8 w-1/2 bg-gray-200 rounded" />
          <div className="h-20 w-full bg-gray-100 rounded" />
          <div className="h-40 w-full bg-gray-100 rounded" />
        </aside>

        {/* Middle Column – Product Description */}
        <div className="col-span-4 max-md:col-span-12 max-lg:col-span-full max-lg:order-10 space-y-4">
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
        </div>

        {/* Right Column – Product Images */}
        <div className="col-span-4 max-md:col-span-12 max-lg:col-span-6 space-y-4">
          <div className="h-64 w-full bg-gray-200 rounded" />
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
      </section>

      <HomeProductsSkeleton title="محصولات مشابه" haveLink={false} />
    </main>
  );
}
