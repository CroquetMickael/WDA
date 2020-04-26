import React, { useState, useEffect } from "react";
import { jsonData, jsonWrite } from "./TodoService";
import { TodoComponent } from "./TodoComponent";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [textTodos, setTextTodos] = useState("");

  const addTodos = () => {
    const datas = jsonData();
    datas.push({
      id: datas.length + 1,
      text: textTodos,
      completed: false
    });
    jsonWrite(JSON.stringify(datas));
    setTodos(datas);
    setTextTodos("");
  };

  const completedAllTodos = () => {
    const datas = jsonData();
    datas.map((todo: any) => (todo.completed = true));
    jsonWrite(JSON.stringify(datas));
    setTodos(datas);
  };

  const checkTodo = (id: string, value: boolean) => {
    const datas = jsonData();
    for (var i = 0; i < datas.length; i++) {
      if (datas[i].id === id) {
        datas[i].completed = value;
      }
    }
    jsonWrite(JSON.stringify(datas));
    setTodos(datas);
  };

  const deleteTodos = (id: string) => {
    const datas = jsonData();
    for (var i = 0; i < datas.length; i++) {
      if (datas[i].id === id) {
        datas.splice(i, 1);
      }
    }
    jsonWrite(JSON.stringify(datas));
    setTodos(datas);
  };

  useEffect(() => {
    let datas = jsonData();
    if (datas === undefined) {
      datas = jsonData();
    }
    setTodos(datas);
  }, []);

  const props = {
    todos,
    addTodos,
    checkTodo,
    setTextTodos,
    deleteTodos,
    completedAllTodos
  };
  return <TodoComponent {...props} />;
};

export { TodoContainer };
