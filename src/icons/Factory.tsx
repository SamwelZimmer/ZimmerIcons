import React from "react";

const Factory = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 21C4.5 18 5.5 14 5.5 8H12.5C12.5 14 13.5 18 15 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4.26495C13.1704 2.62795 14.6678 2.62795 15.8382 4.26495C16.5439 5.26947 17.4561 5.23227 18.179 4.22775C19.3322 2.59075 20.8296 2.59075 22 4.22775"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8496 12.0713H16.4036C16.5444 13.9094 16.3899 17.1164 19.6951 20.82"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 21H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Factory;
