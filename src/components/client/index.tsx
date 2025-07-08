"use client";
import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
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
