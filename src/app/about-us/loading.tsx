export default function Loading() {
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100">
      <section className="w-full bg-background rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl max-md:text-2xl mb-8 text-center text-primary-main font-bold">
          درباره فروشگاه پوشاک D2
        </h1>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {/* Text content skeleton */}
          <div className="space-y-4 px-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 loading rounded w-full" />
            ))}
          </div>

          {/* Media slider skeleton */}
          <div className="w-full max-w-4xl mx-auto max-md:order-first">
            <div className="h-64 bg-gray-300 max-md:h-28 rounded-lg loading" />
          </div>
        </div>
      </section>

      {/* Branches section skeleton */}
      <section className="mt-10 space-y-6">
        <h1 className="text-4xl max-md:text-2xl mb-8 text-center text-primary-main font-bold">
          شعبه ها
        </h1>
        <div className="grid grid-cols-4 max-md:grid-cols-1 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-4 space-y-3"
            >
              <div className="h-40 w-full aspect-square bg-gray-200 rounded loading" />
              <div className="h-4 w-2/12 bg-gray-200 rounded loading" />
              <div className="h-4 w-2/3 bg-gray-200 rounded loading" />
              <div className="h-4 w-1/2 bg-gray-200 rounded loading" />
              <div className="h-4 w-7/12 bg-gray-200 rounded loading" />
              <div className="w-full flex justify-end gap-2">
                <div className="h-6 aspect-square bg-gray-200 rounded loading" />
                <div className="h-6 aspect-square bg-gray-200 rounded loading" />
                <div className="h-6 aspect-square bg-gray-200 rounded loading" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
