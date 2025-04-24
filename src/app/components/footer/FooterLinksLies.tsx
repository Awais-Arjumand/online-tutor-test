import Link from "next/link";
import React from "react";
interface FooterLinksLiesProps {
  heading: string  | undefined;
  label: string;
  href: string;
  src: string | undefined;
}
export const FooterLinksLies = ({
  heading,
  label,
  href,
  src
}: FooterLinksLiesProps) => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-auto text-center md:text-left">
      <h1 className="font-bold text-xl">{heading}</h1>
      <ul className="space-y-2 flex flex-col">
        <Link href={href}>
          <li className="cursor-pointer flex gap-x-3 items-center text-base text-wrap w-[183px]"><img src={src} alt="" />{label}</li>
        </Link>
      </ul>
    </div>
  );
};
