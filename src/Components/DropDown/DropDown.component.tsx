import React from "react";

const DropDownComponent = (props: any) => (
  <div
    className={`w-full max-w-xs overflow-auto transition-all transform  ease-out duration-100 origin-top-right ${
      props.openDropDown ? "opacity-1 scale-y-1" : "opacity-0 scale-y-75"
    } ${props.className}`}
  >
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-40">
      {props.children}
    </div>
  </div>
);

export { DropDownComponent };
