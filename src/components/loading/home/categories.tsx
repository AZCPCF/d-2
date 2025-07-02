export default function HomeCategoriesSkeleton({
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
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="loading rounded-xl" key={index}>
            <div className="rounded-xl p-1 w-full h-60 max-md:h-24"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
