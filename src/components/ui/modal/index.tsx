"use client";
import { ReactNode } from "react";

interface GalleryModalProps {
  jsx: ReactNode;
  onClose: () => void;
}

export default function NextModal({ onClose, jsx }: GalleryModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm modal"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-lg w-full relative max-md:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 left-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="pt-4">{jsx}</div>
      </div>
    </div>
  );
}
