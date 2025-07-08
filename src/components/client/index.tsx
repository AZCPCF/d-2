"use client";
import { useEffect } from "react";
import { registerServiceWorker } from "@/utils/register-sw";

export default function ClientInit() {
  useEffect(() => {
    registerServiceWorker();
  }, []);
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
  return null;
}
