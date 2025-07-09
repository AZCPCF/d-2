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
 * ShareButton component with native sharing or clipboard fallback.
 */
export function ShareButton({
  url,
  title: initialTitle = "اشتراک‌گذاری",
}: ShareButtonProps) {
  const [title, setTitle] = useState(initialTitle);

  const handleShare = useCallback(() => {
    const fullUrl =
      typeof window !== "undefined" ? window.location.origin + url : url;

    if (navigator.share) {
      navigator
        .share({ title: initialTitle, url: fullUrl })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(fullUrl);
      setTitle("آدرس صفحه کپی شد.");
      setTimeout(() => setTitle(initialTitle), 4000);
    }
  }, [url, initialTitle]);

  return (
    <button
      onClick={handleShare}
      type="button"
      className="ml-auto px-4 py-2 font-medium text-white bg-primary-main hover:bg-primary-600 rounded-md duration-100 flex items-center gap-2"
      aria-label="اشتراک‌گذاری صفحه"
    >
      <span className="text-sm">{title}</span>
      {title === initialTitle && (
        <CgShare fontSize={24} aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}
