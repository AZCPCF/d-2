export default function Loading() {
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100 loading">
      <section className="w-full bg-background rounded-lg p-8 shadow-md max-md:p-4">
        <h1 className="text-4xl mb-8 text-center text-primary-main font-bold">
          سوالات متداول D2
        </h1>
        <ul className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <details className="border border-gray-300 rounded-md p-4 group open:border-primary-main flex">
                <summary className="font-medium text-xl cursor-pointer group-open:text-primary-main max-md:text-lg">
                  سوال شماره {index + 1}
                </summary>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
