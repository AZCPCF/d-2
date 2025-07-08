"use client";

import NextImage from "@/components/ui/image";
import { ProductInterface } from "@/interfaces";
import { cn } from "@/utils/cn";
import { useCallback, useEffect, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function ProductImages({ res }: { res: ProductInterface }) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeImage = activeIndex != -1 ? res.images[activeIndex] : res.image_1;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % res.images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + res.images.length) % res.images.length
        );
      } else if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    },
    [isModalOpen, res.images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="col-span-4 max-md:col-span-12 max-md:order-2 max-lg:col-span-6">
      <div className="sticky top-4 max-md:static flex flex-col items-end gap-6 max-md:items-center">
        {/* Main Image */}
        <button
          onClick={() => {
            setActiveIndex(-1);
          }}
          className="w-full aspect-square relative shadow-lg rounded-lg max-w-xl max-md:max-w-[calc(100%-20px)]"
        >
          <NextImage
            key={activeImage.url}
            alt={activeImage.alt || res.title}
            {...activeImage}
            className="rounded-lg"
          />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-4 max-md:gap-2 flex-wrap w-full max-md:justify-center">
          {res.images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={img.url}
                onClick={() => setActiveIndex(index)}
                aria-label={`نمایش تصویر ${index + 1}`}
                className={cn(
                  `rounded-lg shadow-lg overflow-hidden w-[100px] h-[100px]
                max-lg:w-[75px] max-lg:h-[75px] max-md:w-[65px] max-md:h-[65px]
                border-2`,
                  isActive ? "border-primary-500" : "border-gray-200"
                )}
              >
                <NextImage
                  alt={img.alt || `${res.title} thumbnail ${index + 1}`}
                  {...img}
                  className="object-cover w-full h-full"
                />
              </button>
            );
          })}
          {/* View Gallery Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className={cn(
              `rounded-lg shadow-lg overflow-hidden w-[100px] h-[100px]
                max-lg:w-[75px] max-lg:h-[75px] max-md:w-[65px] max-md:h-[65px] bg-secondary-400 flex justify-center items-center text-white hover:bg-secondary-main duration-200`,
              !res.images.length && "hidden"
            )}
          >
            <FaRegImages fontSize={36} />
          </button>
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
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-lg flex gap-2 justify-start flex-row-reverse overflow-x-auto">
              {res.images.map((img, index) => {
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
