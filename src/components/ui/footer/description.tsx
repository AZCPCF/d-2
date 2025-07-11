"use client";
import { useClientCtx } from "@/contexts/client-context";
import { parser } from "@/utils/parser";
import { useMemo } from "react";

export default function FooterDescription() {
  const { aboutUs } = useClientCtx();
  const content = aboutUs?.content || "";

  const { ParsedNode } = useMemo(() => parser(content), [content]);

  return (
    <div className="line-clamp-[7] max-md:line-clamp-none overflow-hidden w-full">
      <ParsedNode className="p-0" />
    </div>
  );
}
