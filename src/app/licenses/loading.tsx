export default function LicensesLoading() {
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100 animate-pulse">
      <section className="w-full bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl max-sm:text-3xl font-bold text-center text-primary-main p-6">
          گواهی نامه ها
        </h1>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 p-8 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="aspect-[4/3] w-full bg-gray-300 rounded-t-lg" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
