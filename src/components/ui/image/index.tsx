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
  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      onError={() => setSrc("/images/404.png")}
    />
  );
}
