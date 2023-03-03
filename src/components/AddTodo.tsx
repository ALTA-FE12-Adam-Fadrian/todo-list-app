import React, { useState } from "react";
import { Todo } from "./Todo";

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 100).toString(),
      content: title,
      isCompleted: false,
    };

    onAdd(newTodo);
    setTitle("");
  };

  return (
    <>
      <h3 className="font-bold font-sans text-2xl">Add Todo</h3>
    <div className="mb-10 mt-10 text-center justify-center flex">
      <form onSubmit={handleSubmit} className="flex flex-row">
        <input
        className="placeholder:italic max-w-sm placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="btn btn-outline btn-info ml-2" type="submit">Add</button>
      </form>
    </div>
    </>
  );
};

export default AddTodo;
