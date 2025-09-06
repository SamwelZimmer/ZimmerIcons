import React from "react";

const AnthropicLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
  >
    <path
      d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693 -3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-0.3712 10.2232 2.2914 -5.9456 2.2914 5.9456Z"
      fill="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default AnthropicLogo;
