import React, { useRef, useState, useEffect, useCallback } from "react";

interface DraggableRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultMin?: number;
  defaultMax?: number;
  onChange?: (range: { min: number; max: number }) => void;
}

const DraggableRangeSlider: React.FC<DraggableRangeSliderProps> = ({
  min = 0,
  max = 1000000,
  step = 100,
  defaultMin = 0,
  defaultMax = 1000000,
  onChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbMinRef = useRef<HTMLDivElement>(null);
  const thumbMaxRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  const [range, setRange] = useState({ min: defaultMin, max: defaultMax });
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const percent = useCallback(
    (val: number) => ((val - min) / (max - min)) * 100,
    [max, min]
  );

  const updateThumbPositions = useCallback(() => {
    const minPercent = percent(range.min);
    const maxPercent = percent(range.max);
    thumbMinRef.current?.style.setProperty("--left", `${minPercent}%`);
    thumbMaxRef.current?.style.setProperty("--left", `${maxPercent}%`);
    fillRef.current?.style.setProperty("--left", `${minPercent + 2}%`);
    fillRef.current?.style.setProperty(
      "--width",
      `${maxPercent - minPercent}%`
    );
  }, [percent, range.max, range.min]);

  const calcValueFromX = useCallback(
    (clientX: number): number => {
      const track = trackRef.current;
      if (!track) return min;
      const rect = track.getBoundingClientRect();
      const px = Math.min(Math.max(0, clientX - rect.left), rect.width);
      const rawVal = min + (px / rect.width) * (max - min);
      return Math.round(rawVal / step) * step;
    },
    [max, min, step]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      const newValue = calcValueFromX(e.clientX);
      if (dragging === "min") {
        const clamped = Math.min(newValue, range.max - step);
        setRange((r) => {
          const updated = { ...r, min: clamped };
          onChange?.(updated);
          return updated;
        });
      } else {
        const clamped = Math.max(newValue, range.min + step);
        setRange((r) => {
          const updated = { ...r, max: clamped };
          onChange?.(updated);
          return updated;
        });
      }
    },
    [calcValueFromX, dragging, onChange, range.max, range.min, step]
  );

  const handleMouseDown = (thumb: "min" | "max") => setDragging(thumb);
  const handleMouseUp = () => setDragging(null);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, handleMouseMove]);

  useEffect(() => {
    updateThumbPositions();
  }, [range, updateThumbPositions]);

  return (
    <div className="w-full max-w-md px-4 py-6 select-none">
      <div className="mb-3 font-medium text-gray-800 flex items-center gap-2">
        بازه قیمت از{" "}
        <span className="text-xl text-primary-main">
          {range.min.toLocaleString()} تومان
        </span>{" "}
        تا{" "}
        <span className="text-xl text-primary-main">
          {range.max.toLocaleString()} تومان
        </span>
      </div>
      <div
        ref={trackRef}
        className="relative h-2 bg-gray-300 rounded-full overflow-visible"
      >
        <div
          ref={fillRef}
          className="absolute h-2 bg-primary-main rounded-full"
          style={{
            left: "var(--left)",
            width: "var(--width)",
          }}
        />
        <div
          ref={thumbMinRef}
          onMouseDown={() => handleMouseDown("min")}
          className="absolute -top-1 w-4 h-4 bg-primary-600 rounded-full z-20 cursor-pointer"
          style={{ left: "var(--left)" }}
        />
        <div
          ref={thumbMaxRef}
          onMouseDown={() => handleMouseDown("max")}
          className="absolute -top-1 w-4 h-4 bg-primary-600 rounded-full z-20 cursor-pointer"
          style={{ left: "var(--left)" }}
        />
      </div>
    </div>
  );
};

export default DraggableRangeSlider;
