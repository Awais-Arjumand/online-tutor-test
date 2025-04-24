"use client";

import React from "react";

interface BadgeProps {
  text: string;
  variant?: "primary" | "secondary" | "success";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "px-2.5 py-1 rounded-[72px] text-sm font-medium";

  const variantStyles = {
    primary: "bg-[#e8cdfb] text-xs  text-primary",
    secondary: "border-2 text-xs border-solid border-zinc-300 text-stone-900",
    success: "bg-green-400 flex justify-center items-center  text-xs  text-white",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {text}
    </span>
  );
};
