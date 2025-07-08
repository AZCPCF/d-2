"use client";
import { useEffect } from "react";

export const toggleTheme = () => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const isDark = root.classList.contains("dark");

  if (isDark) {
    root.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    root.classList.add("dark");
    localStorage.theme = "dark";
  }

  return isDark ? "light" : "dark";
};

const ThemeInitializer = () => {
  console.log("runned");
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
};

export default ThemeInitializer;
