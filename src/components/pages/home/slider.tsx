"use client";

import { useRef } from "react";
import NextImage from "@/components/ui/image";
import { cn } from "@/utils/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider";
import { HomePageRequestInterface } from "@/interfaces/pages/home";
import Link from "next/link";

export default function HomePageSlider(
  props: Pick<HomePageRequestInterface, "slides">
) {
  const sliderInstanceRef = useRef<KeenSliderInstance | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearNextTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const startNextTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      sliderInstanceRef.current?.next();
    }, 3000);
  };

  const autoPlay = () => {
    clearNextTimeout();
    startNextTimeout();

    sliderInstanceRef.current?.on("dragStarted", clearNextTimeout);
    sliderInstanceRef.current?.on("animationEnded", startNextTimeout);
    sliderInstanceRef.current?.on("updated", startNextTimeout);
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    props.slides.length > 1
      ? {
          loop: true,
          rtl: true,
          slides: {
            perView: 1,
            spacing: 5,
          },
          created(slider) {
            sliderInstanceRef.current = slider;
            autoPlay();
          },
        }
      : {}
  );

  return (
    <section
      ref={props.slides.length > 1 ? sliderRef : null}
      className={cn(
        "w-full overflow-hidden",
        props.slides.length > 1 && "keen-slider"
      )}
    >
      {props.slides.map((slide, index) => (
        <Link
          href={slide.link}
          key={`home-page-slider-${index}`}
          className={cn(
            props.slides.length > 1
              ? "keen-slider__slide"
              : "w-full h-full block"
          )}
        >
          <NextImage alt={`slide-${slide.id}`} {...slide.image} />
        </Link>
      ))}
    </section>
  );
}
