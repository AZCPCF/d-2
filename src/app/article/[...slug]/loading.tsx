export default function ArticleLoading() {
  return (
    <main className="bg-gray-200/75 py-10 px-8 max-sm:px-4">
      <section className="grid-cols-12 grid gap-4 animate-pulse">
        {/* Main Content */}
        <div className="col-span-8 max-md:col-span-full rounded-xl grid grid-cols-1 bg-white relative shadow-md">
          <div className="w-full flex items-center justify-center px-6 pt-6 mt-6">
            <div className="h-8 w-2/3 bg-gray-300 rounded mt-8" />
            <div className="absolute left-2 top-2 flex gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-200 rounded border border-primary-main" />
            </div>
          </div>

          <div className="w-full flex justify-center py-10 px-8 max-md:px-4">
            <div className="w-full h-96 bg-gray-200 rounded-xl" />
          </div>

          <div className="space-y-4 px-8 pb-10 max-md:px-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 max-md:col-span-full">
          <div className="sticky top-4 bg-white rounded-xl shadow-md p-4 space-y-4">
            <div className="h-6 w-1/3 bg-gray-300 rounded" />

            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b last:border-0 pb-3 p-2"
              >
                <div className="w-24 h-24 bg-gray-200 rounded" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-4 w-4/5 bg-gray-200 rounded" />
                  <div className="h-3 w-1/3 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
