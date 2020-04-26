import React from "react";

const Base = (props: any) => (
  <div className="flex flex-col bg-gray-100 h-screen w-screen">
    {props.children}
  </div>
);

export { Base };
