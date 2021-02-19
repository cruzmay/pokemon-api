import React from 'react';

export const ColorIcon = (props) => {
  return (
    <svg
      width={21}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M12.243 1.337c-.473-1.742-2.95-1.824-3.486 0C5.967 10.89 0 13.485 0 20.217 0 26.177 4.696 31 10.5 31S21 26.177 21 20.217c0-6.766-5.953-9.284-8.757-18.88zM10.5 27.125c-3.684 0-6.682-3.043-6.682-6.782 0-.535.427-.968.955-.968a.96.96 0 01.954.968c0 2.671 2.141 4.844 4.773 4.844.527 0 .954.434.954.969a.961.961 0 01-.954.969z"
          fill="#C4C4C4"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h21v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
