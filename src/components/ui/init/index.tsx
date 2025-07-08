"use client";
import { ClientContextProvider } from "@/contexts/client-context";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ReactNode, useEffect } from "react";
import { Toaster } from "sonner";

export default function ClientInit({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    const userPref = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      userPref === "dark" || (!userPref && systemPrefersDark);

    if (shouldUseDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);
  return (
    <ClientContextProvider>
      <Toaster
        position="top-center"
        gap={4}
        duration={2000}
        toastOptions={{
          classNames: {
            toast: "!bg-gray-50",
            title: "text-lg font-bold",
            success: "!text-teal-500",
            error: "!text-red-500",
            warning: "!text-yellow-500",
            info: "!text-blue-500",
            description: "!text-sm !text-zinc-400",
          },
        }}
      />
      {children}
      <div className="hidden">
        <div
          className="fb-like"
          data-href="https://d-2-orpin.vercel.app"
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        />
        <a
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-url="https://d-2-orpin.vercel.app"
          data-show-count="false"
        >
          Tweet
        </a>
      </div>
      <GoogleAnalytics trackPageViews />
    </ClientContextProvider>
  );
}
