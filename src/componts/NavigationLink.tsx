import * as React from "react";

interface NavigationLinkProps {
  text: string;
  href: string;
}

export function NavigationLink({ text, href }: NavigationLinkProps) {
  return (
    <a
      href={href}
      className="self-stretch my-auto text-base font-medium text-neutral-200"
    >
      {text}
    </a>
  );
}