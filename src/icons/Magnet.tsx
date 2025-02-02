import React from "react";

const Magnet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <path
      d="M3.925 2.5H9.15C9.15 2.5 8.2 7.7 8.2 10.1C8.2 13.1 10.1 15.5 12 15.5C13.9 15.5 15.8 13.1 15.8 10.1C15.8 7.7 14.85 2.5 14.85 2.5H20.075C20.075 2.5 21.5 7.13842 21.5 11.5C21.5 17 17.7 21.5 12 21.5C6.3 21.5 2.5 17 2.5 11.5C2.5 7.13842 3.925 2.5 3.925 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M2.97266 7.25H8.19766M15.7977 7.25L21.0227 7.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Magnet;
