"use client";

import NextImage from "@/components/image";
import MediaPlayer from "@/components/media-player";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface AboutMediaSliderProps {
  images: { url: string }[];
  video: string;
  poster: { url: string };
}

export default function AboutMediaSlider({
  images,
  video,
  poster,
}: AboutMediaSliderProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
  });
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        <div className="keen-slider__slide relative w-full h-full">
          <MediaPlayer poster={poster} src={video} />
        </div>
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide relative w-full h-full">
            <NextImage alt={`D2 media ${idx + 1}`} {...img} />
          </div>
        ))}
      </div>
    </section>
  );
}
