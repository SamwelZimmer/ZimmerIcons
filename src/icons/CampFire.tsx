import React from "react";

const CampFire = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M17.6709 16C18.5134 14.8191 19 13.4095 19 12C19 8 17.5 7 17.5 7C16.9615 8.5 15.5 9 15.5 9C15.5 3.5 12 2 12 2C12 2 8.5 3.5 8.5 9C8.5 9 7.03846 8.5 6.5 7C6.5 7 5 8 5 12C5 13.4095 5.48656 14.8191 6.32905 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 19H5C4.44772 19 4 19.4477 4 20V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V20C20 19.4477 19.5523 19 19 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 16C14.5 13.5 12 11 12 11C12 11 9.5 13.5 9.5 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CampFire;
