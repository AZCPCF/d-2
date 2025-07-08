"use client";
import NextImage from "@/components/ui/image";
import NextModal from "@/components/ui/modal";
import { GalleryRequestInterface } from "@/interfaces/pages/gallery";
import { useState } from "react";

export default function Galleries(props: { res: GalleryRequestInterface }) {
  const [selectedImage, setSelectedImage] = useState<
    GalleryRequestInterface["data"][0] | null
  >(null);
  return (
    <>
      {props.res.data.map((item, index) => (
        <div
          className="relative w-full overflow-hidden group cursor-pointer"
          key={`gallery-item-${index}`}
          onClick={() => setSelectedImage(item)}
        >
          <NextImage
            alt={`تصویر ${index + 1}`}
            {...item.image}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-background/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-center">
            {item.text}
          </div>
        </div>
      ))}

      {selectedImage && (
        <NextModal
          jsx={
            <>
              {" "}
              <NextImage
                alt={selectedImage.text || `تصویر${selectedImage.id}`}
                {...selectedImage.image}
                className="h-auto max-md:max-h-[500px] max-h-[600px] object-contain mb-4"
              />
              <p>{selectedImage.text}</p>
            </>
          }
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
