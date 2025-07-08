"use client";

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