import { ImageFromApiInterface } from "@/interfaces";
import Image from "next/image";

export default function NextImage(
  props: ImageFromApiInterface & { className?: string; alt: string }
) {
  return (
    <Image
      src="https://api.d2collection.com/uploads/1e20b72e-e573-4672-af6c-7de2c496fd1a.webp"
      {...props}
      alt={props.alt}
    />
  );
}
