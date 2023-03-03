import React from "react";
import { Todo } from "./Todo";

interface TodoDetailProps {
  todo: Todo;
  onClose: () => void;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ todo, onClose }) => {
  return (
    <div>
      <h2>Todo Detail</h2>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.content}</p>
      <p>Completed: {todo.isCompleted ? "Yes" : "No"}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TodoDetail;
