import React from "react";

const Astronaut = (props: React.SVGProps<SVGSVGElement>) => (
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
    <circle
      cx="12"
      cy="11"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.6573 18C19.6963 16.35 21 13.8273 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.4998 17.5L14.1211 13.1213M17.9998 5L14.1211 8.87868"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 18H5C4.05719 18 3.58579 18 3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H20C20.5523 22 21 21.5523 21 21C21 19.3431 19.6569 18 18 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Astronaut;
