import NextImage from "@/components/ui/image";
import { ProductInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { formatNumberWithCommas } from "@/utils/formater";
import Link from "next/link";
import { ColorBox } from "./color-box";

export default function ProductCard({
  product,
  className,
  showColors = false,
}: {
  product: ProductInterface;
  className?: string;
  showColors?: boolean;
}) {
  return (
    <Link
      href={`${product.page_url}/${product.title}`}
      className={cn(
        "block bg-white shadow-md rounded min-h-max duration-200 relative",
        className
      )}
    >
      {showColors ? (
        <div className="absolute top-2 z-10 left-2 gap-3 flex flex-col">
          {product?.colors_cache?.map((item) => (
            <ColorBox title={item.title} key={item.color} color={item.color} />
          ))}

          {product?.color_count > 3 ? (
            <ColorBox
              className={
                "w-4 p-2 h-4 rounded-xs shadow-sm border border-secondary-main flex justify-center items-center bg-secondary-main text-white"
              }
              title={`${product?.color_count - 3} رنگ دیگر`}
            >
              {product?.color_count - 3}
            </ColorBox>
          ) : undefined}
        </div>
      ) : undefined}
      <NextImage
        alt={`product-slide-special-suggestion-${product.id}`}
        {...product.image_1}
        className="w-full aspect-square rounded-t"
      />
      <div className="flex flex-col justify-between h-[100px] p-2 text-left">
        <h3 className="text-sm font-semibold line-clamp-2 text-right">
          {product.title}
        </h3>

        <div>
          {product.discount ? (
            <div className="text-sm text-gray-800">
              {formatNumberWithCommas(product.price)} تومان
            </div>
          ) : undefined}
          <div
            className={cn(
              "text-base font-bold",
              !product.discount ? "" : "text-red-500"
            )}
          >
            {formatNumberWithCommas(product.after_price)} تومان
          </div>
          {product.discount ? (
            <span className="text-green-600 text-xs">
              تخفیف {product.discount}%
            </span>
          ) : undefined}
        </div>
      </div>
    </Link>
  );
}
