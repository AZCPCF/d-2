"use client";
import { useState } from "react";
import { LicenseInreface } from "@/interfaces";
import NextImage from "@/components/ui/image";
import clsx from "clsx";
import LicenseModal from "@/components/ui/modals/license-modal";

interface Props {
  licenses: LicenseInreface[];
}

export default function LicenseGallery({ licenses }: Props) {
  const [selectedLicense, setSelectedLicense] =
    useState<LicenseInreface | null>(null);

  return (
    <>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 p-8 gap-6">
        {licenses.map((license, index) => (
          <div
            key={`license-${index}`}
            className={clsx(
              "w-full bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer transform transition-transform hover:scale-[1.03]"
            )}
            onClick={() => setSelectedLicense(license)}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <NextImage
                alt={`license-${license.id}`}
                {...license.image}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <p className="p-4 text-gray-700 text-center text-base">
              {license.text}
            </p>
          </div>
        ))}
      </div>

      {selectedLicense && (
        <LicenseModal
          license={selectedLicense}
          onClose={() => setSelectedLicense(null)}
        />
      )}
    </>
  );
}
