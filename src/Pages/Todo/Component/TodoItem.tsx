import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = (props: any) => (
  <li className="flex w-full justify-between border-b border-gray-200 py-2">
    <input
      className="ml-4"
      type="checkbox"
      checked={props.completed}
      onChange={event => props.checkTodo(props.id, event.target.checked)}
    />
    <span
      className={`${props.completed ? "line-through text-gray-400" : null}`}
    >
      {props.text}
    </span>
    <button>
      <FontAwesomeIcon
        className="mr-4 text-gray-300 hover:text-black cursor-pointer"
        icon="times-circle"
        onClick={() => props.deleteTodos(props.id)}
      />
    </button>
  </li>
);

export { TodoItem };
