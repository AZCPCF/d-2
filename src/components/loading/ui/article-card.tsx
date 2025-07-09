export default function ArticleCardSkeleton() {
  return (
    <div
      className="min-w-[250px] max-w-full rounded-lg shadow-md bg-background loading overflow-hidden"
      role="status"
      aria-label="در حال بارگذاری کارت مقاله"
      aria-busy="true"
    >
      <div className="h-52 w-full bg-gray-300" aria-hidden="true" />
      <div className="p-4 h-36 relative">
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2" aria-hidden="true" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-6" aria-hidden="true" />
        <div
          className="h-3 bg-gray-300 rounded w-1/3 absolute bottom-2 left-2"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
