"use client";
import { ImageFromApiInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { fileUrl } from "@/utils/env";
import Image from "next/image";
import { useState } from "react";
export default function NextImage({
  className,
  alt,
  wrapperClassName,
  ...imageProps
}: ImageFromApiInterface & {
  className?: string;
  alt: string;
  wrapperClassName?: string;
}) {
  const [src, setSrc] = useState(
    imageProps.url.startsWith("https") || imageProps.url.startsWith("/images")
      ? imageProps.url
      : `${fileUrl}${imageProps.url}`
  );
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative", wrapperClassName)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <span className="text-xs text-gray-400">درحال بارگذاری...</span>
        </div>
      )}
      <Image
        {...imageProps}
        src={src}
        alt={alt}
        onError={() => setSrc("/images/404.png")}
        onLoad={() => setIsLoading(false)}
        className={cn(className, isLoading ? "invisible" : "block")}
      />
    </div>
  );
}
