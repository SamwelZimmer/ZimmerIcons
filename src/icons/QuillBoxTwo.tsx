import React from "react";

const QuillBoxTwo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    color={"#000000"}
    fill={"none"}
  >
    <path
      d="M10.5502 3.00012C6.69779 3.00706 4.68047 3.10164 3.39125 4.39085C1.99997 5.78214 1.99997 8.02137 1.99997 12.4998C1.99997 16.9783 1.99997 19.2175 3.39125 20.6088C4.78254 22.0001 7.02177 22.0001 11.5003 22.0001C15.9787 22.0001 18.218 22.0001 19.6093 20.6088C20.8985 19.3196 20.9931 17.3023 21 13.4499"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity="0.4"
      d="M8.99997 17.0001C11 11.5001 12.9604 9.63648 15 8.00012M11.0557 13.0001C10.3323 3.86647 16.8024 1.27566 21.9806 2.16451C22.1897 5.19148 20.7086 6.32494 17.888 6.84837C18.4327 7.41748 19.3951 8.13366 19.2913 9.02891C19.2174 9.66598 18.7847 9.97855 17.9195 10.6037C16.0232 11.9737 13.8265 12.8376 11.0557 13.0001Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default QuillBoxTwo;
