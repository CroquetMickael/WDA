import React from "react";
import { Layout } from "../../Components/Layout/Layout";
import { TodoHeader } from "../../Components/Todo/TodoHeader";
import { TodoList } from "../../Components/Todo/TodoList";
import { TodoItem } from "../../Components/Todo/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoFooter } from "../../Components/Todo/TodoFooter";

const TodoComponent = (props: any) => (
  <Layout marginTop={true} overflow={true}>
    <div className="flex flex-wrap w-full justify-center items-center">
      <div className="bg-white w-1/2 rounded text-2xl shadow-xl">
        <TodoHeader {...props} />
        <TodoList>
          <TransitionGroup className="flex flex-wrap w-full justify-center items-center">
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
