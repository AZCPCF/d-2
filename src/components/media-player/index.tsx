"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCompress,
  FaExpand,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

interface MediaPlayerProps {
  src: string;
  poster: { url: string };
}

/**
 * Accessible MediaPlayer with full controls.
 */
export default function MediaPlayer({ src, poster }: MediaPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100 %
  const [volume, setVolume] = useState(1); // 0–1
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState(false);

  // Handle timeout error
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) setError(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  const onVideoLoadedMetadata = () => setVideoLoaded(true);

  // Video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () =>
      setProgress((video.currentTime / video.duration) * 100);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setError(true);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("error", handleError);
    video.addEventListener("loadedmetadata", onVideoLoadedMetadata);

    video.volume = volume;
    video.muted = muted;

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadedmetadata", onVideoLoadedMetadata);
    };
  }, [volume, muted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      return;
    }
    video.pause();
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  const toggleMute = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (videoRef.current) videoRef.current.muted = newMuted;
      if (!newMuted && volume === 0) {
        setVolume(0.5);
        if (videoRef.current) videoRef.current.volume = 0.5;
      }
      return newMuted;
    });
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  const formatTime = (time?: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  if (error) {
    return (
      <div
        className="w-full bg-gray-200 text-black text-xl h-[380px] max-xl:h-[350px] max-lg:h-[280px] max-md:h-[400px] max-sm:h-[200px] flex justify-center items-center p-4 rounded-md text-center"
        dir="rtl"
        role="alert"
        aria-live="assertive"
      >
        ویدیو مورد نظر در دسترس نمی‌باشد.
      </div>
    );
  }
  return (
    <div
      className="relative bg-gray-200 rounded-md overflow-hidden max-w-full"
      dir="rtl"
      role="region"
      aria-label="پخش‌کننده ویدیو"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster.url}
        className={`w-full aspect-video bg-background relative transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        preload="metadata"
        playsInline
      />

      {videoLoaded && (
        <div
          data-controls
          className="absolute bg-gray-200 z-10 border border-primary-main rounded-b-lg bottom-0 flex-row-reverse left-0 right-0 dark:bg-background bg-opacity-70 p-3 flex items-center space-x-3 space-x-reverse select-none"
        >
          {/* Fullscreen */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            aria-label={fullscreen ? "خروج از حالت تمام صفحه" : "تمام صفحه"}
            className="text-primary-main text-xl hover:text-primary-400 transition"
            type="button"
          >
            {fullscreen ? (
              <FaCompress aria-hidden="true" focusable="false" />
            ) : (
              <FaExpand aria-hidden="true" focusable="false" />
            )}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => {
              e.stopPropagation();
              onVolumeChange(e);
            }}
            aria-label="حجم صدا"
            className="w-24 accent-primary-500 cursor-pointer"
          />

          {/* Mute/Unmute */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            aria-label={muted ? "بی‌صدا کردن را غیرفعال کن" : "بی‌صدا کن"}
            className="text-primary-main text-xl hover:text-primary-400 transition"
            type="button"
          >
            {muted || volume === 0 ? (
              <FaVolumeMute aria-hidden="true" focusable="false" />
            ) : (
              <FaVolumeUp aria-hidden="true" focusable="false" />
            )}
          </button>

          {/* Time */}
          <span className="text-primary-main text-sm tabular-nums w-20 text-left font-mono select-none">
            {formatTime(videoRef.current?.currentTime)} /{" "}
            {formatTime(videoRef.current?.duration)}
          </span>

          {/* Seek */}
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => {
              e.stopPropagation();
              onSeek(e);
            }}
            aria-label="موقعیت ویدیو"
            className="flex-grow flex-row-reverse flex accent-primary-500 cursor-pointer"
          />

          {/* Play/Pause */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? "توقف" : "پخش"}
            className="text-primary-main text-2xl hover:text-primary-400 transition"
            type="button"
          >
            {isPlaying ? (
              <FaPause aria-hidden="true" focusable="false" />
            ) : (
              <FaPlay aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
