"use client";
import { LicenseInreface } from "@/interfaces";
import NextImage from "@/components/ui/image";

interface Props {
  license: LicenseInreface;
  onClose: () => void;
}

export default function LicenseModal({ license, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center modal"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-lg relative max-md:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end p-2 h-8">
          <button
            onClick={onClose}
            className="text-4xl text-gray-500 cursor-pointer"
          >
            ×
          </button>
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <NextImage
            alt={`modal-license-${license.id}`}
            {...license.image}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="p-3 text-lg text-gray-700 text-center">{license.text}</p>
      </div>
    </div>
  );
}
