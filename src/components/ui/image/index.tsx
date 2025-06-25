import { ImageFromApiInterface } from "@/interfaces";
import { fileUrl } from "@/utils/env";
import Image from "next/image";

export default function NextImage(
  props: ImageFromApiInterface & { className?: string; alt: string }
) {
  return (
    <Image
      src={
        props.url.startsWith("https") || props.url.startsWith("/images")
          ? props.url
          : `${fileUrl}${props.url}`
      }
      {...props}
      alt={props.alt}
    />
  );
}
