"use client";

import React, { ReactNode } from "react";
import { NavBar } from "./navbar/NavBar";
import Footer from "./footer/Footer";
import { usePathname } from "next/navigation";

interface WrapLayoutProps {
  children: ReactNode;
}

export const WrapLayout: React.FC<WrapLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const allowedRoutes = [
    "/",
    "/tutors",
    "/become-a-tutor",
    "/contactus",
    "/about",
    "/blog",
    "/faqs",
    "/how-it-works",
    "/login",
    "/signup",
  ];

  const shouldShowNavAndFooter = allowedRoutes.includes(pathname || "");

  return (
    <div className="w-full h-fit-content flex flex-col items-center justify-center">
      {shouldShowNavAndFooter && <NavBar />}
      {children}
      {shouldShowNavAndFooter && <Footer />}
    </div>
  );
};