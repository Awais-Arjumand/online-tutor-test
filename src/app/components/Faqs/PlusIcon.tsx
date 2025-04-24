import React from "react";

export function PlusIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="plus-icon"
    >
      <circle cx="25" cy="25" r="25" fill="#1F1D0D" />
      <path
        d="M25 18V32M18 25H32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
