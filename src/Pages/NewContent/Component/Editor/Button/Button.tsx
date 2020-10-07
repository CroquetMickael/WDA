import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ func, isActive, children }) => {
  return (
    <button
      className={`p-1 mb-1 mr-1 hover:text-black ${
        isActive ? "text-black" : "text-gray-400"
      }`}
      onMouseDown={(event) => {
        event.preventDefault();
        func();
      }}
    >
      {children}
    </button>
  );
};

export { Button };
