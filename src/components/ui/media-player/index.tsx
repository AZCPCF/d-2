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
 * MediaPlayer component renders a customizable video player with
 * controls for play/pause, volume, mute, seek, and fullscreen.
 */
export default function MediaPlayer({ src, poster }: MediaPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // State for tracking video and UI statuses
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // percentage 0 - 100
  const [volume, setVolume] = useState(1); // 0 to 1
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState(false);

  // If video or poster is not loaded within 6 seconds, show error
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) setError(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  // Handler for when video metadata is loaded
  const onVideoLoadedMetadata = () => setVideoLoaded(true);

  // Setup and cleanup video event listeners
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

    // Sync volume and muted states to the video element
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

  // Play or pause the video
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  // Seek video by progress slider (percentage)
  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  // Adjust volume slider
  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  // Toggle mute state
  const toggleMute = () => {
    setMuted((prevMuted) => {
      const newMuted = !prevMuted;
      if (videoRef.current) videoRef.current.muted = newMuted;

      // If unmuting and volume is 0, set volume to 0.5 by default
      if (!newMuted && volume === 0) {
        setVolume(0.5);
        if (videoRef.current) videoRef.current.volume = 0.5;
      }
      return newMuted;
    });
  };

  // Toggle fullscreen for video container
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

  // Format seconds into "m:ss" string with leading zeros for seconds
  const formatTime = (time?: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    return `${minutes}:${pad(seconds)}`;
  };

  if (error) {
    return (
      <div
        className="w-full bg-gray-200 text-black text-xl h-[380px] max-xl:h-[350px] max-lg:h-[280px] max-md:h-[400px] max-sm:h-[200px] flex justify-center items-center p-4 rounded-md text-center"
        dir="rtl"
        role="alert"
        aria-live="assertive"
      >
        ویدیو مورد نظر در دسترس نمیباشد.
      </div>
    );
  }

  return (
    <div
      className="relative bg-gray-200 rounded-md overflow-hidden max-w-full"
      dir="rtl"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster.url}
        className={`w-full aspect-video bg-black relative z-20 transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        preload="metadata"
        playsInline
      />

      {/* Controls */}
      {videoLoaded && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 flex items-center space-x-3 space-x-reverse select-none">
          <button
            onClick={toggleFullscreen}
            aria-label={fullscreen ? "خروج از حالت تمام صفحه" : "تمام صفحه"}
            className="text-white text-xl hover:text-blue-400 transition"
            type="button"
          >
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={onVolumeChange}
            aria-label="حجم صدا"
            className="w-24 accent-blue-500 cursor-pointer"
          />

          <button
            onClick={toggleMute}
            aria-label={muted ? "بی‌صدا کردن را غیرفعال کن" : "بی‌صدا کن"}
            className="text-white text-xl hover:text-blue-400 transition"
            type="button"
          >
            {muted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <span className="text-white text-sm tabular-nums w-20 text-left font-mono select-none">
            {formatTime(videoRef.current?.currentTime)} /{" "}
            {formatTime(videoRef.current?.duration)}
          </span>

          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={onSeek}
            aria-label="موقعیت ویدیو"
            className="flex-grow accent-blue-500 cursor-pointer"
          />

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "توقف" : "پخش"}
            className="text-white text-2xl hover:text-blue-400 transition"
            type="button"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      )}
    </div>
  );
}
