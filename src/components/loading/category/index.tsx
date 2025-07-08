export default function CategoryPageLoading({ title }: { title?: string }) {
  return (
    <main
      className="bg-gray-100 p-10 max-sm:p-4 min-h-screen"
      role="status"
      aria-label="Loading categories"
    >
      <section className="bg-background p-10 grid grid-cols-1 shadow-md rounded-lg max-sm:p-4">
        <h1 className="text-4xl font-bold text-center text-primary-main p-4">
          {title ? (
            title
          ) : (
            <div
              className="h-8 w-1/5 bg-gray-300 rounded mx-auto loading"
              aria-hidden="true"
            />
          )}
        </h1>

        <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded min-h-max p-2 relative"
            >
              <div
                className="w-full aspect-square bg-gray-300 rounded-t mb-2 loading"
                aria-hidden="true"
              />
              <div className="space-y-2">
                <div
                  className="h-4 bg-gray-300 rounded w-5/6 loading"
                  aria-hidden="true"
                />
                <div className="flex w-full justify-end ">
                  <div
                    className="h-3 bg-gray-200 rounded w-1/3 loading"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
