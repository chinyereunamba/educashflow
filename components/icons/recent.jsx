import React from "react";

export default function Recent({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10H2C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C7.53614 2 5.33243 3.11383 3.86492 4.86543L6 7H0V1L2.44656 3.44648C4.28002 1.33509 6.9841 0 10 0ZM11 5L10.9998 9.585L14.2426 12.8284L12.8284 14.2426L8.9998 10.413L9 5H11Z"
        fill="black"
      />
    </svg>
  );
}
