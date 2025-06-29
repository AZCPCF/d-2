"use client";

import { useClientCtx } from "@/contexts/client-context";
import { socialLinksData } from "@/static";
import NextLink from "../link";


const SocialLinks = (props: { className?: string }) => {
  const { aboutUs } = useClientCtx();
  return (
    <>
      {socialLinksData.map((item, index) => (
        <NextLink
          key={`social-link-${index}`}
          href={aboutUs?.[item.href] || ""}
          label={item.icon}
          className={props.className}
        />
      ))}
    </>
  );
};
export default SocialLinks;
