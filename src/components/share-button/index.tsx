"use client";

import { useCallback, useState } from "react";
import { CgShare } from "react-icons/cg";

interface ShareButtonProps {
  /** Relative URL path to share */
  url: string;
  /** Optional initial title/text shown on the button */
  title?: string;
}

/**
 * ShareButton component that either triggers the native share dialog (if supported)
 * or copies the URL to clipboard with a temporary confirmation message.
 */
export function ShareButton({ url, title: initialTitle = "اشتراک‌گذاری" }: ShareButtonProps) {
  const [title, setTitle] = useState(initialTitle);

  const handleShare = useCallback(() => {
    const fullUrl =
      typeof window !== "undefined" ? window.location.origin + url : url;

    if (navigator.share) {
      // Use native sharing if available
      navigator
        .share({ title, url: fullUrl })
        .catch((err) => console.error("Share failed:", err));
    } else {
      // Fallback: copy URL to clipboard and show confirmation text
      navigator.clipboard.writeText(fullUrl);
      setTitle("آدرس صفحه کپی شد.");
      setTimeout(() => setTitle(initialTitle), 4000);
    }
  }, [url, title, initialTitle]);

  return (
    <button
      onClick={handleShare}
      className="ml-auto px-4 py-2 font-medium text-white bg-primary-main hover:bg-primary-600 rounded-md duration-100 flex items-center"
      aria-label="اشتراک‌گذاری صفحه"
      type="button"
    >
      <span className="text-sm">{title}</span>
      {title === initialTitle && <CgShare fontSize={24} />}
    </button>
  );
}
