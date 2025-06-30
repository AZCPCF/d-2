"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "@/components/ui/image";
import { ProductInterface } from "@/interfaces";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/utils/cn";

export default function ProductImages({ res }: { res: ProductInterface }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = res.images;
  const activeImage = images[activeIndex];

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Optional: Keyboard navigation for modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    },
    [isModalOpen, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="col-span-4 max-md:col-span-12 max-md:order-first max-lg:col-span-6">
      <div className="sticky top-4 max-md:static flex flex-col items-end gap-6 max-md:items-center">
        {/* Main Image */}
        <div className="w-full aspect-square relative shadow-lg rounded-lg max-w-xl max-md:max-w-[calc(100%-20px)]">
          <NextImage
            key={activeImage.url}
            alt={activeImage.alt || res.title}
            {...activeImage}
            className="rounded-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 max-md:gap-2 flex-wrap w-full max-md:justify-center flex-row-reverse">
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={img.url}
                onClick={() => openModal(index)}
                aria-label={`نمایش تصویر ${index + 1}`}
                className={`rounded-lg shadow-lg overflow-hidden w-[100px] h-[100px]
                max-lg:w-[75px] max-lg:h-[75px] max-md:w-[65px] max-md:h-[65px]
                border-2 ${
                  isActive ? "border-primary-500" : "border-gray-200"
                }`}
              >
                <NextImage
                  alt={img.alt || `${res.title} thumbnail ${index + 1}`}
                  {...img}
                  className="object-cover w-full h-full"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md bg-opacity-80 flex items-center justify-center px-4">
          <button
            onClick={closeModal}
            className="absolute top-4 left-4 text-white text-2xl hover:text-red-400 transition"
            aria-label="Close modal"
          >
            <IoMdClose />
          </button>
          <div className="w-2xl flex flex-col gap-4 items-center relative max-md:pb-20 bg-white rounded-lg">
            <div className="w-full aspect-square">
              <NextImage
                key={activeImage.url}
                alt={activeImage.alt || res.title}
                {...activeImage}
                className="rounded-lg w-full h-full"
              />
            </div>

            {/* Thumbnail Bar in Bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-lg flex gap-2 justify-around overflow-x-auto px-8">
              {images.map((img, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={img.url}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      `w-20 h-20 border-4 rounded-lg overflow-hidden flex-shrink-0`,
                      isActive ? "border-secondary-main" : "border-transparent"
                    )}
                  >
                    <NextImage
                      alt={img.alt || `thumbnail ${index + 1}`}
                      {...img}
                      className="w-full aspect-square"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
