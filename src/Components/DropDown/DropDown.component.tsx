import React, { FunctionComponent } from "react";

interface DropDownProps {
  openDropDown: boolean;
  className?: string;
}
const DropDownComponent: FunctionComponent<DropDownProps> = (props) => (
  <div
    className={`w-screen max-w-xs overflow-auto transition-all transform  ease-out duration-100 origin-top-right ${
      props.openDropDown ? "scale-y-1" : "hidden scale-y-75"
    } ${props.className}`}
  >
    <div className="z-40 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      {props.children}
    </div>
  </div>
);

export { DropDownComponent };
