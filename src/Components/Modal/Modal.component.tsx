import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalComponent = (props: any) => (
  <div
    className={`fixed transition-all duration-100 ${
      props.modalOpen ? "opacity-100 z-20" : "opacity-0"
    } w-full h-full z-10 pin flex items-center`}
  >
    <div
      className={`absolute h-full w-full pin bg-black ease-out transition-all duration-500 ${
        props.modalOpen ? "opacity-75" : "opacity-0 "
      }`}
      onClick={props.toggleModal}
    />
    <div
      className={`relative ease-out transition-all duration-500 ${
        props.modalOpen ? "top-0" : "top-full"
      } mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8`}
    >
      <div className="shadow-lg bg-white rounded-lg p-8">
        <div className="flex justify-between mb-2">
          <h1 className="text-center text-2xl text-green-dark">
            {props.title}
          </h1>
          <div
            className="cursor-pointer hover:text-red-400 text-2xl"
            onClick={props.toggleModal}
          >
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
        <hr />
        {props.children}
      </div>
    </div>
  </div>
);

export { ModalComponent };
