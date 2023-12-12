import React, { useId } from "react";

export default function Dropdown({ dropLabel, arrayDropMenu, classes }) {
  const dropMenuId = useId();
  return (
    <details
      className={`main__faq-block-dropdown group  relative  inline-block w-fit text-sm ${classes}`}
    >
      <summary className=" main__question-dropdown duration-400 inline-block w-fit cursor-pointer pr-[2rem] font-semibold">
        {dropLabel}
      </summary>
      <ul className="absolute top-[40px] z-[375] inline-block w-fit flex-col overflow-hidden whitespace-nowrap  rounded-lg bg-white bg-opacity-100 py-2 font-[500] leading-normal text-slate-700 shadow-lg group-open:flex child:mx-1 md:-space-y-2  2xl:-left-6">
        {arrayDropMenu.map((menuItem, index) => {
          return (
            <li
              key={dropMenuId + index}
              className="font-en hover:bg-brand-100 rounded-md p-2"
            >
              <a href={menuItem.split(" ").join("-").toLowerCase()}>
                {menuItem}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
