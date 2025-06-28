"use client";

import NextImage from "@/components/ui/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface AboutMediaSliderProps {
  images: { url: string }[];
  video: string;
  poster: { url: string };
  videoText: string;
}

export default function AboutMediaSlider({
  images,
  // video,
  // poster,
  // videoText,
}: AboutMediaSliderProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
  });
  return (
    <section className="w-full max-w-4xl mx-auto mb-">
      <h2 className="text-center text-2xl font-bold text-primary-main mb-6">
        {/* {videoText} */}
      </h2>
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        {/* <div className="keen-slider__slide relative w-full h-full"> */}
         {/* <MediaPlayer poster={poster} src={video}/> */}
        {/* </div> */}

        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide relative w-full h-full">
            <NextImage alt={`D2 media ${idx + 1}`} {...img} />
          </div>
        ))}
      </div>
    </section>
  );
}
