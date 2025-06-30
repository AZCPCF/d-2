"use client";

import { useCallback, useState } from "react";
import { CgShare } from "react-icons/cg";

export function ShareButton({
  url,
  title: titleProps,
}: {
  url: string;
  title?: string;
}) {
  const [title, setTitle] = useState(titleProps);
  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title,
        url: typeof window !== "undefined" ? window.location.origin + url : url,
      });
    } else {
      navigator.clipboard.writeText(
        typeof window !== "undefined" ? window.location.origin + url : url
      );
      setTitle("آدرس صفحه کپی شد.");
      setTimeout(() => {
        setTitle(titleProps);
      }, 4000);
    }
  }, [url, title, titleProps]);

  return (
    <button
      onClick={handleShare}
      className="ml-auto px-4 py-2 font-medium text-white bg-primary-main hover:bg-primary-600 rounded-md duration-100 flex items-center"
    >
      <span className="text-sm">{title}</span>
      {title == titleProps && <CgShare fontSize={24} />}
    </button>
  );
}
