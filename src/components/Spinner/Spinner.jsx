import React from "react";

export default function Spinner({ size, text, classes }) {
  return (
    <div className={`grid ${classes} h-[70vh] place-content-center`}>
      <div
        id="spinner"
        className={` spinner spinner-${size} before:border-brand-100 before:border-t-brand-600 loading z-50 mx-auto mb-3 before:border-2 before:border-solid `}
      ></div>
      <span className="text-[rgb(234,88,12)]">{text}</span>
    </div>
  );
}
