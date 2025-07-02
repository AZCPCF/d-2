export default function HomeStoriesSkeleton() {
  return (
    <section className="w-full flex gap-10 p-10 overflow-auto scrollbar-none">
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="max-w-[80px] min-w-[80px] text-center" key={index}>
          <div className="rounded-full p-1 loading">
            <div className="w-[74px] aspect-square rounded-full bg-gray-300" />
          </div>
          <div className="mt-2 w-20 h-2 bg-gray-300 loading rounded mx-auto" />
        </div>
      ))}
    </section>
  );
}
