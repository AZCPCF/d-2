"use client";

const inserted = new Set<string>();
let sharedStyleTag: HTMLStyleElement | null = null;

/**
 * Ensures a shared <style> tag exists in the document head.
 * If not, creates and appends one.
 *
 * @returns The shared HTMLStyleElement used for injecting styles.
 */
function ensureSharedStyleTag(): HTMLStyleElement {
  if (!sharedStyleTag) {
    sharedStyleTag = document.createElement("style");
    document.head.appendChild(sharedStyleTag);
  }
  return sharedStyleTag;
}

/**
 * Generates a unique dynamic CSS class name for a given style string,
 * inserts the style into a shared style tag if not already added,
 * and returns the generated class name.
 *
 * @param style - CSS style rules as a string (e.g., "color: red; font-weight: bold;").
 * @returns A unique class name string (e.g., "c1x2y3z").
 */
export function generateDynamicClass(style: string): string {
  const hash = `c${hashString(style)}`;

  // Insert the style rule once per unique class
  if (!inserted.has(hash) && typeof document !== "undefined") {
    const tag = ensureSharedStyleTag();
    tag.textContent += `.${hash} { ${style} }\n`;
    inserted.add(hash);
  }

  return hash;
}

/**
 * Creates a hash string from a given input string using bitwise operations.
 *
 * @param str - The input string to hash.
 * @returns A base36 encoded hash string.
 */
function hashString(str: string): string {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(36);
}
