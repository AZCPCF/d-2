"use client";

import NextLink from "@/components/link";
import { useClientCtx } from "@/contexts/client-context";
import { socialLinksData } from "@/static";

interface SocialLinksProps {
  className?: string;
}

/**
 * Renders social media links using icons and URLs from context data.
 * Uses NextLink component for navigation.
 */
const SocialLinks = ({ className }: SocialLinksProps) => {
  const { aboutUs } = useClientCtx();

  return (
    <>
      {socialLinksData.map((item, index) => {
        // Resolve URL from aboutUs data by the social platform key
        const href = aboutUs?.[item.href] || "";

        return (
          <NextLink
            key={`social-link-${index}`}
            href={href}
            label={item.icon}
            className={className}
          />
        );
      })}
    </>
  );
};

export default SocialLinks;
