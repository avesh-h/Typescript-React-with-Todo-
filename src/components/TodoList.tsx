import React from "react";
import { Todo } from "./modal";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

// interface Obj {
//   todo: string;
//   id: number;
// }

function TodoList({ todos, setTodos }: Props) {
  return (
    <>
      {todos.map((todo:Todo) => {
        return <SingleTodo todo={todo}  key={todo.id} todos = {todos} setTodos = {setTodos}  />;
      })}
    </>
  );
}
export default TodoList;
