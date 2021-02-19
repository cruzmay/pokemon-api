import React from 'react';

export const ArrowIcon = (props) => {
  return (
    <svg
      width={34}
      height={38}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M14.458 33.035l1.684 1.647a1.843 1.843 0 002.573 0l14.754-14.42a1.746 1.746 0 000-2.516L18.715 3.318a1.843 1.843 0 00-2.573 0l-1.684 1.647a1.756 1.756 0 00.03 2.546l9.145 8.52H1.821C.812 16.031 0 16.825 0 17.813v2.375c0 .987.812 1.78 1.821 1.78h21.812l-9.145 8.521a1.743 1.743 0 00-.03 2.546z"
          fill="#C4C4C4"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="matrix(1 0 0 -1 0 38)"
            d="M0 0h34v38H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
