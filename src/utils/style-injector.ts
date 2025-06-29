"use client";
const inserted = new Set<string>();
let sharedStyleTag: HTMLStyleElement | null = null;

function ensureSharedStyleTag(): HTMLStyleElement {
  if (!sharedStyleTag) {
    sharedStyleTag = document.createElement("style");
    document.head.appendChild(sharedStyleTag);
  }
  return sharedStyleTag;
}

export function generateDynamicClass(style: string): string {
  const hash = `c${hashString(style)}`;
  if (!inserted.has(hash) && typeof document !== "undefined") {
    const tag = ensureSharedStyleTag();
    tag.textContent += `.${hash} { ${style} }\n`;
    inserted.add(hash);
  }
  return hash;
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}
