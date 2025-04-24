import React from "react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  const transform = direction === "prev" ? "matrix(-1 0 0 1 40 0)" : "";

  return (
    <button
      className="flex relative justify-center items-center p-0 cursor-pointer border-[none] h-[42px] w-[42px]"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <circle
          cx="20"
          cy="20"
          r="19.5"
          transform={transform}
          stroke="#1F1D0D"
        />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-[1]"
        style={{ transform: direction === "prev" ? "rotate(180deg)" : "none" }}
      >
        <path
          d="M2.50331 10.8298H15.4916L11.0808 15.2407C11.002 15.3177 10.9393 15.4097 10.8963 15.5111C10.8532 15.6126 10.8308 15.7216 10.8302 15.8318C10.8296 15.9421 10.8508 16.0513 10.8927 16.1532C10.9346 16.2552 10.9963 16.3478 11.0743 16.4257C11.1522 16.5037 11.2449 16.5654 11.3468 16.6072C11.4488 16.6491 11.558 16.6704 11.6682 16.6698C11.7784 16.6691 11.8874 16.6466 11.9889 16.6036C12.0904 16.5606 12.1823 16.4978 12.2593 16.419L18.0927 10.5857C18.2489 10.4294 18.3367 10.2175 18.3367 9.9965C18.3367 9.77553 18.2489 9.56361 18.0927 9.40734L12.2593 3.574C12.182 3.49647 12.0902 3.43498 11.989 3.39308C11.8879 3.35118 11.7795 3.32968 11.67 3.32983C11.5052 3.32987 11.3441 3.37876 11.2071 3.47033C11.0701 3.5619 10.9633 3.69204 10.9002 3.84429C10.8372 3.99654 10.8207 4.16407 10.8528 4.32569C10.885 4.48732 10.9643 4.63579 11.0808 4.75233L15.4916 9.16317H2.50331C2.28229 9.16317 2.07033 9.25097 1.91405 9.40725C1.75777 9.56353 1.66997 9.77549 1.66997 9.9965C1.66997 10.2175 1.75777 10.4295 1.91405 10.5858C2.07033 10.742 2.28229 10.8298 2.50331 10.8298Z"
          fill="#1F1D0D"
        />
      </svg>
    </button>
  );
};
    