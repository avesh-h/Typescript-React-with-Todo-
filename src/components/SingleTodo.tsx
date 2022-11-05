import React, { useState } from "react";
import "./SingleTodo.css";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { Todo } from "./modal";


interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(!edit);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id:number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s>
          <h3>{todo.todo}</h3>
        </s>
      ) : (
        <h3>{todo.todo}</h3>
      )}
      {/* <h3>{todo.todo}</h3> */}

      <AiFillEdit
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          }
        }}
        style={{cursor:'pointer'}}
      />

      <AiFillDelete onClick={() => handleDelete(todo.id)} style={{cursor:'pointer'}} />

      <AiOutlineCheck onClick={() => handleDone(todo.id)} style={{cursor:'pointer'}} />
    </form>
  );
}

export default SingleTodo;
