"use client";
import NextImage from "@/components/ui/image";
import { ImageFromApiInterface } from "@/interfaces";

export default function StoryModal({
  story,
  onClose,
}: {
  story: {
    title: string;
    image_2: ImageFromApiInterface;
    link: string;
  };
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm story-modal"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-lg w-full relative max-md:w-10/12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-4xl text-gray-600"
        >
          ×
        </button>
        <NextImage
          {...story.image_2}
          alt={story.title}
          className="rounded-lg w-full aspect-square mb-4 p-4"
        />
        <h2 className="text-xl font-semibold">{story.title}</h2>
        <a
          href={story.link}
          className="text-blue-500 underline text-sm mt-2 block text-end"
          target="_blank"
        >
          مشاهده بیشتر
        </a>
      </div>
    </div>
  );
}
