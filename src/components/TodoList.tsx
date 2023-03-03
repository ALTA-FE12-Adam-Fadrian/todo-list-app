import React from "react";
import axios from "axios";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";
import useTodoApi from "../hooks/useTodoApi";

interface TodoListProps {
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTodo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onDelete, onUpdate }) => {
  const { todoList, fetchListTodo, updateTodoTask } = useTodoApi();
  const handleUpdate = (id: string, updatedTodo: Todo) => {
    updateTodoTask({ ...updatedTodo, id });
  };

  return (
   <>
     <h1 className="text-black font-bold font-sans text-2xl">Results</h1>
    <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-4 md:p-5 lg:p-6 cursor-pointer h-auto ">
      
      {/* @ts-ignore */}
      {todoList.map((todo, idx) => (
        <TodoItem
          key={todo.id + idx}
          todo={todo}
          onDelete={onDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
   </>
  );
};

export default TodoList;
