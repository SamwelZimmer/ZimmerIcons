import React from "react";

const HandPointingRight = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 8.83415H2.94868C3.59418 8.83415 4.22251 8.62541 4.74055 8.23886L9.64341 4.58042C10.2089 4.15849 10.9104 3.82148 11.5581 4.10005C12.6065 4.551 13.2876 5.82324 11.7157 7.38045L10.0063 8.97804L20.4294 8.97804C22.4726 9.03427 22.5739 12.3231 20.4294 12.4637H14.4894C14.6805 13.9441 13.6371 20.9177 9.21687 19.9012C9.00686 19.8529 8.79375 19.8047 8.58346 19.7576C7.6647 19.5519 6.02726 18.9439 5.06998 18.2735C4.07344 17.5755 3.08083 17.8218 2 17.8218"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HandPointingRight;
