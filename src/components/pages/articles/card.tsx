import NextImage from "@/components/ui/image";
import { ArticleInterface } from "@/interfaces";
import Link from "next/link";

export default function ArticleCard({
  article,
}: {
  article: ArticleInterface;
}) {
  return (
    <Link
      href={`/article/${article.page_url}`}
      className="group block overflow-hidden relative rounded-lg bg-white"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <NextImage
          {...article.main_image}
          alt={article.main_image.alt || article.title}
          className="w-full h-52 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 h-36 relative bg-white">
        <h2 className="text-lg font-bold text-gray-800 group-hover:text-primary-main transition-colors duration-200 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-500 absolute bottom-2 left-2">
          {article.date.str || article.date.string}
        </p>
      </div>
    </Link>
  );
}
