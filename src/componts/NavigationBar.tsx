import * as React from "react";
import { SocialIcon } from "./Sociallcon";
import { NavigationLink } from "./NavigationLink";
import { SearchBox } from "./SearchBox";

interface NavigationBarProps {
  logoSrc: string;
}

export function NavigationBar({ logoSrc }: NavigationBarProps) {
  const navigationLinks = [
    { text: "Blogs", href: "#" },
    { text: "Docs", href: "#" }
  ];

  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/49e7366e8ecd4c17e49d8bcd8a4ae03023a92cd0bad07eaa62a7ae08a615cf48?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd", alt: "Social Media Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c25d7622b1182cca65569bfde6fefb1b64869d6b62bbba6963d4176ae6802ddd?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd", alt: "Social Media Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ff097ffc08954276ecf5ac7a4c2ba637a60aabb30870e2f7efddc9b4c7653cc?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd", alt: "Social Media Icon 3" }
  ];

  return (
    <nav className="flex overflow-hidden z-10 gap-2.5 items-start pr-32 pl-32 border-b bg-neutral-800 bg-opacity-90 border-neutral-500 border-opacity-40 max-md:px-5">
      <div className="flex flex-wrap gap-10 justify-between items-center p-4 min-w-[240px] w-[1316px] max-md:max-w-full">
        <div className="flex overflow-hidden justify-between items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-[240px] text-neutral-500 w-[423px] max-md:max-w-full">
          <img
            loading="lazy"
            src={logoSrc}
            alt="Company Logo"
            className="object-contain flex-1 shrink self-stretch my-auto aspect-[5.95] basis-8 w-[202px]"
          />
          <SearchBox />
        </div>
        <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px]">
          {navigationLinks.map((link, index) => (
            <NavigationLink key={index} {...link} />
          ))}
          <div className="shrink-0 self-stretch my-auto w-0 border border-solid bg-neutral-500 border-neutral-500 h-[23px]" />
          <div className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-2 my-auto">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}