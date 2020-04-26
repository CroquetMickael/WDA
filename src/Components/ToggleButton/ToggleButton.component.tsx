import React from "react";

const ToggleButtonComponent = (props: any) => {
  const toggleValue = () => {
    if (props.value) {
      props.setValue(false);
    } else {
      props.setValue(true);
    }
  };
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/2 mr-2">
        <label htmlFor="toggle">{props.label}</label>
      </div>
      <div className="md:w-1/2">
        <span
          className={`border rounded-full border-grey flex items-center transition-all ease-out duration-100 ${
            props.value
              ? "bg-green-400 justify-end"
              : "bg-gray-400 justify-start"
          } cursor-pointer w-12 `}
          onClick={toggleValue}
          id="toggle"
        >
          <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
        </span>
      </div>
    </div>
  );
};

export { ToggleButtonComponent };
