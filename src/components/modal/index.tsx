"use client";

import { useEffect } from "react";
import { ReactNode } from "react";

interface GalleryModalProps {
  /** JSX content to display inside the modal */
  jsx: ReactNode;
  /** Callback to close the modal */
  onClose: () => void;
}

export default function NextModal({ onClose, jsx }: GalleryModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="گالری تصاویر"
    >
      <div
        className="bg-background dark:text-white p-6 rounded-lg max-w-lg w-full relative max-md:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 left-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
          aria-label="بستن"
          type="button"
        >
          ✖
        </button>
        <div className="pt-4">{jsx}</div>
      </div>
    </div>
  );
}
