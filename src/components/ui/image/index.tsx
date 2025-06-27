"use client";
import { ImageFromApiInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { fileUrl } from "@/utils/env";
import Image from "next/image";
import { useState } from "react";

export default function NextImage(
  props: ImageFromApiInterface & { className?: string; alt: string }
) {
  const [src, setSrc] = useState(
    props.url.startsWith("https") || props.url.startsWith("/images")
      ? props.url
      : `${fileUrl}${props.url}`
  );
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative", props.className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <span className="text-xs text-gray-400">درحال بارگذاری...</span>
        </div>
      )}
      <Image
        {...props}
        src={src}
        alt={props.alt}
        onError={() => setSrc("/images/404.png")}
        onLoad={() => setIsLoading(false)}
        className={cn(props.className, isLoading ? "invisible" : "block")}
      />
    </div>
  );
}
