"use client";
import { ImageFromApiInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { fileUrl } from "@/utils/env";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const resolvedUrl =
    imageProps.url.startsWith("https") || imageProps.url.startsWith("/images")
      ? imageProps.url
      : `${fileUrl}${imageProps.url}`;

  const [src, setSrc] = useState(resolvedUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSrc((prev) => {
      if (prev !== resolvedUrl) {
        setIsLoading(true);
        return resolvedUrl;
      }
      return prev;
    });
  }, [resolvedUrl]);

  return (
    <div className={cn("relative", wrapperClassName)}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 loading rounded",
            className
          )}
        />
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
