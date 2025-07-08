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
 * Resolves image URLs properly, handles loading state, and fallback on error.
 */
export default function NextImage({
  className,
  alt,
  wrapperClassName,
  ...imageProps
}: NextImageProps) {
  // Compute the resolved URL based on whether the URL is absolute or relative
  const resolvedUrl =
    imageProps.url.startsWith("https") || imageProps.url.startsWith("/images")
      ? imageProps.url
      : `${fileUrl}${imageProps.url}`;

  // State for current image source and loading status
  const [src, setSrc] = useState(resolvedUrl);
  const [isLoading, setIsLoading] = useState(true);

  // Update src and loading state when resolvedUrl changes
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
    <div className={cn("relative ", wrapperClassName)}>
      {/* Placeholder while loading */}
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 loading rounded",
            className
          )}
          aria-hidden="true"
        />
      )}

      <Image
        {...imageProps}
        src={src}
        alt={alt}
        onError={() => setSrc("/images/404.png")}
        sizes="100vw"
        onLoad={() => setIsLoading(false)}
        className={cn("w-full",className, isLoading ? "invisible" : "block")}
        // You might want to add priority or loading attributes here if needed
      />
    </div>
  );
}
