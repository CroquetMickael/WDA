import React from "react";
import { Layout } from "../../Components/Layout/Layout";
import { TodoHeader } from "./Component/TodoHeader";
import { TodoList } from "./Component/TodoList";
import { TodoItem } from "./Component/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoFooter } from "./Component/TodoFooter";

const TodoComponent = (props: any) => (
  <Layout marginTop={true} overflow={true}>
    <div className="flex flex-wrap items-center justify-center w-full">
      <div className="w-1/2 text-2xl bg-white rounded shadow-xl">
        <TodoHeader {...props} />
        <TodoList>
          <TransitionGroup className="flex flex-wrap items-center justify-center w-full">
            {props.todos.map((todo: any, index: any) => (
              <CSSTransition key={index} timeout={200} classNames="todo">
                <TodoItem
                  {...todo}
                  deleteTodos={props.deleteTodos}
                  checkTodo={props.checkTodo}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </TodoList>
        <TodoFooter size={props.todos.length} />
      </div>
    </div>
  </Layout>
);

export { TodoComponent };
