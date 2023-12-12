import React from "react";
import Button from "../Buttons/Button";
export default function Error({ type, href, label, classes }) {
  return (
    <div
      className={`${classes} -mt-6 flex h-full min-h-[400px] flex-col items-center justify-center space-y-2 text-center leading-tight text-slate-600 lg:-mt-12 lg:space-y-3`}
    >
      <div className="cursor-pointer">
        <div className="grid place-content-center py-2">
          <img src="/images/ic_error.svg" alt="" />
        </div>
        <span className="font-en">
          Some error occurred.
          <br /> Please <span className="text-brand-600">try again</span>.
        </span>
        <Button
          type={type}
          href={href}
          label={label}
          classes={"my-3 block px-3 py-2"}
        />
      </div>
    </div>
  );
}
