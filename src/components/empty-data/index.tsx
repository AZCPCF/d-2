import Link from "next/link";
import { ReactNode } from "react";

interface EmptyDataProps {
  title: ReactNode | string;
}

/**
 * Displays a styled empty state message with a title and a link back to home.
 */
export default function EmptyData({ title }: EmptyDataProps) {
  return (
    <section className="w-full max-w-3xl mx-auto bg-background  rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm text-center px-8 py-16 space-y-6">
      {/* Render the title: string wrapped in <p>, otherwise render as is */}
      {typeof title === "string" ? (
        <p className="text-2xl font-semibold text-gray-700 dark:text-white">{title}</p>
      ) : (
        title
      )}

      {/* Link back to homepage */}
      <Link
        href="/"
        className="inline-block bg-primary-main text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200"
      >
        بازگشت به صفحه اصلی
      </Link>
    </section>
  );
}
