"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Captured error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="home">
          <section className="flex flex-col items-center justify-center py-40 text-right px-4">
            <h1 className="font-extrabold text-red-600 mb-4 flex gap-2 items-center">
              <FaBug fontSize={48} />
              <FaBug fontSize={48} />
              <span className="text-8xl">5</span>
            </h1>
            <h2 className="text-3xl text-gray-900 mb-2 dark:text-red-700">
              خطایی رخ داده است
            </h2>
            <p className="text-gray-600 mb-6 text-lg max-[500px]:text-sm dark:text-white">
              مشکلی در پردازش درخواست به وجود آمده. لطفاً دوباره تلاش کنید یا با
              پشتیبانی تماس بگیرید.
            </p>
            <div className="flex gap-4">
              <button
                onClick={reset}
                className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
              >
                تلاش دوباره
              </button>
              <Link
                href="/"
                className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
