import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

export default function NotFound() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center my-40 text-right px-4">
        <h1 className="text-7xl font-extrabold text-secondary-main mb-4 flex gap-2 items-center">
          <span>4</span>
          <FaQuestionCircle className="text-5xl" />
          <span>4</span>
        </h1>
        <h2 className="text-3xl text-gray-900 mb-2">صفحه پیدا نشد</h2>
        <p className="text-gray-600 mb-6 max-[500px]:text-sm text-lg">
          ممکن است این صفحه حذف شده باشد یا آدرس وارد شده نادرست باشد.
        </p>
        <Link
          href="/"
          className="bg-secondary-main text-white px-5 py-2 rounded hover:bg-secondary-600 transition"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </main>
  );
}
