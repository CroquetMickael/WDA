import React from "react";
import { InputComponent } from "../../../Components/Input/InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoHeader = (props: any) => (
  <div className="flex">
    <span className="content-center justify-center">
      <FontAwesomeIcon
        className="mt-4 ml-2 text-gray-300 cursor-pointer hover:text-black"
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
