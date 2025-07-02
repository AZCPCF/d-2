export default function GalleryLoading() {
  return (
    <main className="bg-gray-100 p-10 max-md:p-4 animate-pulse">
      <section className="bg-white p-10 max-md:p-4 rounded-lg grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-3 shadow-md">
        <h1 className="text-4xl text-primary-main font-bold col-span-full p-4 text-center">
          گالری تصاویر D2
        </h1>

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden bg-gray-300 rounded-lg aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </section>
    </main>
  );
}
