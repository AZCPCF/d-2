"use client";
import NextImage from "@/components/image";
import NextModal from "@/components/modal";
import { HomePageRequestInterface } from "@/interfaces/pages/home";
import Link from "next/link";
import { useState } from "react";

export default function HomeStories(
  props: Pick<HomePageRequestInterface, "stories">
) {
  const [selectedStory, setSelectedStory] = useState<
    (typeof props)["stories"][0] | null
  >(null);

  return (
    <>
      <section className="w-full flex gap-10 p-10 overflow-auto scrollbar-none">
        {props.stories.map((story, index) => (
          <div
            className="max-w-[82px] min-w-[82px] text-center cursor-pointer"
            key={`home-story-${index}`}
            onClick={() => setSelectedStory(story)}
          >
            <div className="rounded-full p-1 bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#f77737]">
              <NextImage
                alt={`home-story-${index + 1}`}
                className="w-[74px] min-w-[74px] rounded-full aspect-square max-lg:min-w-[54px]"
                {...story.image_1}
              />
            </div>
            <p className="text-gray-400 w-24 text-base">{story.title}</p>
          </div>
        ))}
      </section>

      {selectedStory && (
        <NextModal
          jsx={
            <>
              <NextImage
                {...selectedStory.image_2}
                alt={selectedStory.title}
                className="rounded-lg w-full aspect-square mb-4 p-4"
              />
              <h2 className="text-xl font-semibold">{selectedStory.title}</h2>
              <Link
                href={selectedStory.link}
                className="text-blue-500 underline text-sm mt-2 block text-end"
                target="_blank"
              >
                مشاهده بیشتر
              </Link>
            </>
          }
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
}
