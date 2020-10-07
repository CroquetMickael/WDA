import React from "react";

const TodoList = (props: any) => (
  <ul className="flex flex-wrap shadow-inner pt-4">{props.children}</ul>
);

export { TodoList };
