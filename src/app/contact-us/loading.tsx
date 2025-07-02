export default function Loading() {
  return (
    <main className="grid grid-cols-12 max-md:grid-cols-1 gap-4 p-12 max-md:p-4 text-gray-800 bg-gray-100 animate-pulse">
      {/* Contact Form Skeleton */}
      <section className="bg-white p-6 rounded-xl shadow-md space-y-6 max-lg:col-span-7 max-md:p-2 max-md:rounded-lg col-span-8 max-md:col-span-full flex flex-col">
        <div className="h-8 w-1/2 bg-gray-300 rounded mx-auto mb-4" />
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded" />
          ))}
          <div className="col-span-full h-40 bg-gray-200 rounded" />
          <div className="col-span-full h-12 bg-gray-300 rounded" />
        </div>
      </section>

      {/* Contact Info Skeleton */}
      <section className="flex gap-4 bg-transparent col-span-4 max-lg:col-span-5 max-md:order-first max-md:col-span-full">
        <div className="bg-white shadow-md w-full rounded-xl max-md:rounded-lg p-6 max-md:p-3 space-y-5">
          <div className="h-6 w-1/3 bg-gray-300 rounded" />
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-4 justify-end pt-2">
            <div className="h-6 w-6 bg-gray-300 rounded-full" />
            <div className="h-6 w-6 bg-gray-300 rounded-full" />
            <div className="h-6 w-6 bg-gray-300 rounded-full" />
          </div>
          <div className="w-full h-72 bg-gray-200 rounded-xl shadow-md" />
        </div>
      </section>
    </main>
  );
}
