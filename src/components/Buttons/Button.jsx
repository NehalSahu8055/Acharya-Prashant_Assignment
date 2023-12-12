import React from "react";

export default function Button({ type, href, label, classes, image }) {
  return (
    <a
      href={href}
      className={`cursor-pointer rounded-md  text-white btn-${type} transition ${classes} flex items-center justify-center gap-2`}
      aria-label={`Click to go to ${label}`}
    >
      {image && (
        <img src={image} alt={`${label} Image`} width={15} height={15} />
      )}
      {label}
    </a>
  );
}
