
import React from "react";

const StickyIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      style={{ width: "20px", height: "20px" }}
    >
      <g clipPath="url(#clip0_sticky)">
        <g clipPath="url(#clip1_sticky)">
          <path
            d="M14.1134 2.86935L5.87716 2.88288C5.10629 2.86935 5.25505 3.20746 5.44439 3.3968L7.33777 5.29018L6.53985 10.6322L4.68704 12.4851C4.15959 13.0125 5.14686 13.1612 4.97104 13.1477L9.60984 13.1342L9.62336 17.0427C9.62336 17.2591 9.79918 17.4349 10.0156 17.4349C10.2319 17.4349 10.4078 17.2591 10.4078 17.0427V13.1477L15.0465 13.1612C14.9113 13.1612 15.831 12.9719 15.3441 12.4851L13.4778 10.6187L12.6798 5.27666L14.3974 3.55909C14.6679 3.26156 15.0465 2.88288 14.1134 2.86935ZM5.87716 12.3498L7.08081 11.1462H12.9503L14.154 12.3498H5.87716ZM12.6663 10.3482H7.33777L8.08161 5.65534L12.0036 5.68238L12.6663 10.3482ZM12.0036 4.87093H8.00046L6.79681 3.66728H13.2073L12.0036 4.87093Z"
            fill="#1F1D0D"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_sticky">
          <rect width="20" height="20" fill="white"></rect>
        </clipPath>
        <clipPath id="clip1_sticky">
          <rect
            width="11.6667"
            height="15"
            fill="white"
            transform="translate(4.16699 2.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default StickyIcon;

