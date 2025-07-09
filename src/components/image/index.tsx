"use client";

import { ImageFromApiInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { fileUrl } from "@/utils/env";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NextImageProps extends ImageFromApiInterface {
  className?: string;
  alt: string;
  wrapperClassName?: string;
}

/**
 * Wrapper around Next.js Image component.
 * Handles absolute/relative URLs, fallback, and loading visuals.
 */
export default function NextImage({
  className,
  alt,
  wrapperClassName,
  ...imageProps
}: NextImageProps) {
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
          aria-hidden="true"
          role="presentation"
        />
      )}

      <Image
        {...imageProps}
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setSrc("/images/404.png")}
        sizes="100vw"
        onLoad={() => setIsLoading(false)}
        className={cn(
          "w-full",
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300",
          className,
        )}
      />
    </div>
  );
}
