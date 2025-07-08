import { ReactNode } from "react";
import { TbLicense } from "react-icons/tb";

export default function RulesPageLoading({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <main className="p-10 max-md:p-4 mx-auto bg-gray-100 min-h-screen">
      <section className="w-full bg-background rounded-xl shadow-sm mb-6" role="status" aria-label="Loading rules content">
        <h1 className="flex items-center gap-3 max-sm:text-3xl text-4xl font-extrabold text-primary-main border-b border-gray-200 px-6 py-4">
          {icon}
          {title}
        </h1>
        <div className="space-y-4 px-6 py-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full loading" />
          ))}
        </div>
      </section>

      <div className="flex items-center gap-2 w-full p-4 text-gray-200 bg-white rounded-lg text-xl">
        <TbLicense />
        <div className="h-5 w-48 bg-gray-50 rounded loading" />
      </div>
    </main>
  );
}
