import * as React from "react";

interface SocialIconProps {
  src: string;
  alt: string;
}

export function SocialIcon({ src, alt }: SocialIconProps) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-square fill-neutral-200 w-[26px]"
    />
  );
}