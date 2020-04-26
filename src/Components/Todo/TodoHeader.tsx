import React from "react";
import { InputComponent } from "../Input/InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoHeader = (props: any) => (
  <div className="flex">
    <span className="justify-center content-center">
      <FontAwesomeIcon
        className="ml-2 mt-4 text-gray-300 hover:text-black cursor-pointer"
        icon="arrow-alt-circle-down"
        onClick={props.completedAllTodos}
      />
    </span>
    <span className="w-full">
      <InputComponent
        border={false}
        placeholder="What needs to be done"
        type="text"
        onKeyDown={() => props.addTodos()}
        onChange={(event: any) => props.setTextTodos(event.target.value)}
      />
    </span>
  </div>
);

export { TodoHeader };
