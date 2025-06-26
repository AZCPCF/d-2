"use client";

import { HomePageRequestInterface } from "@/app/page";
import NextImage from "@/components/ui/image";
import { cn } from "@/utils/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";

export default function HomePageSlider(
  props: Pick<HomePageRequestInterface, "slides">
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const autoPlay = (slider: any) => {
    clearNextTimeout();
    startNextTimeout(slider);

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", () => startNextTimeout(slider));
    slider.on("updated", () => startNextTimeout(slider));
  };

  const clearNextTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const startNextTimeout = (slider: any) => {
    timeoutRef.current = setTimeout(() => {
      slider.next();
    }, 3000);
  };

  const [sliderRef] = useKeenSlider(
    props.slides.length > 1
      ? {
          loop: true,
          rtl: true,
          slides: {
            perView: 1,
            spacing: 5,
          },
          created: autoPlay,
        }
      : {}
  );

  return (
    <section
      ref={props.slides.length > 1 ? sliderRef : null}
      className={cn(
        `w-full overflow-hidden`,
        props.slides.length > 1 && "keen-slider"
      )}
    >
      {props.slides.map((slide, index) => (
        <a
          href={slide.link}
          key={`home-page-slider-${index}`}
          className={cn(
            props.slides.length > 1
              ? "keen-slider__slide"
              : "w-full h-full block"
          )}
        >
          <NextImage alt={`slide-${slide.id}`} {...slide.image} />
        </a>
      ))}
    </section>
  );
}
