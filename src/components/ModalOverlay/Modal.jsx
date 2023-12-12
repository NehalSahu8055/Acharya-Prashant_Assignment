import React from "react";

const Overlay = ({ classes }) => {
  return (
    <div className={`overlay-sidebar absolute cursor-auto ${classes}`}>
      <div className="fixed inset-0 z-[380] bg-slate-700 opacity-60 md:block "></div>
    </div>
  );
};

export { Overlay };
