import React from "react";

const Feather = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.68645 17C11.3214 17 12.1388 17 12.8739 16.6955C13.609 16.3911 14.187 15.8131 15.3431 14.657L19.7578 10.2426C21.4147 8.58579 21.4147 5.8995 19.7578 4.24264C18.101 2.58579 15.4147 2.58578 13.7578 4.24264L9.34333 8.65682C8.18712 9.81296 7.60901 10.391 7.30451 11.1261C7 11.8612 7 12.6788 7 14.3139V17H9.68645Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 21L15 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Feather;
