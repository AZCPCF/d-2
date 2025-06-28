"use client";

import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { cn } from "./cn";

type ToastType = "success" | "error" | "warning" | "info";

type ToastProps = {
  message: string;
  duration?: number;
  isVisible: boolean;
  type?: ToastType;
  onClose: () => void;
};

const typeStyles: Record<
  ToastType,
  { bg: string; icon: React.ReactNode; bar: string }
> = {
  success: {
    bg: "bg-emerald-600 text-white",
    icon: <FaCheckCircle />,
    bar: "bg-white",
  },
  error: {
    bg: "bg-red-600 text-white",
    icon: <FaTimesCircle />,
    bar: "bg-white",
  },
  warning: {
    bg: "bg-yellow-400 text-black",
    icon: <FaExclamationTriangle />,
    bar: "bg-black/60",
  },
  info: {
    bg: "bg-blue-600 text-white",
    icon: <FaInfoCircle />,
    bar: "bg-white",
  },
};

export default function Toast({
  message,
  duration = 3000,
  isVisible,
  onClose,
  type = "success",
}: ToastProps) {
  const [visible, setVisible] = useState(isVisible);
  //   const [progress, setProgress] = useState("w-full");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // let shrinkTimer: NodeJS.Timeout;
    let dismissTimer: NodeJS.Timeout;
    let closeTimer: NodeJS.Timeout;

    if (isVisible) {
      setVisible(true);
      setHasMounted(true);
      //   setProgress("w-full");
      //   shrinkTimer = setTimeout(() => setProgress("w-0"), 50);
      dismissTimer = setTimeout(() => setVisible(false), duration);
      closeTimer = setTimeout(onClose, duration + 300);
    }

    return () => {
      //   clearTimeout(shrinkTimer);
      clearTimeout(dismissTimer);
      clearTimeout(closeTimer);
    };
  }, [isVisible, duration, onClose]);

  return (
    <div
      className={cn(
        `fixed px-4 py-3 rounded shadow min-w-[250px] top-12 left-1/2 -translate-x-1/2 z-50`,
        typeStyles[type].bg,
        hasMounted && "transform transition-all duration-300 ease-in-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}
    >
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="absolute top-0 left-0 px-2 text-inherit hover:opacity-90 transition text-2xl"
        aria-label="Close toast"
      >
        ×
      </button>

      <div className="flex items-center gap-2">
        {typeStyles[type].icon}
        <span className="text-xl text-start">{message}</span>
      </div>

      {/* <div className="w-full h-1 bg-black/10 rounded overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          className={cn(
            "h-full ease-linear transition-all",
            progress,
            typeStyles[type].bar
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />
      </div> */}
    </div>
  );
}
