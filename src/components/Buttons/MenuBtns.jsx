import React from "react";

const OpenMenuBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16"
      viewBox="0 0 22 16"
      className="open-menu-btn fill-current"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.826"
        d="M1 1.609h20M1 8h20M1 14.391h20"
      ></path>
    </svg>
  );
};
const CloseMenuBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      className="close-menu-btn hover:text-brand-700 z-[400] h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white fill-current p-2 text-center text-slate-700 opacity-90 transition-all duration-150 hover:opacity-100 hover:shadow"
    >
      <path
        fillRule="evenodd"
        d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414Z"
      ></path>
    </svg>
  );
};

export { OpenMenuBtn, CloseMenuBtn };
