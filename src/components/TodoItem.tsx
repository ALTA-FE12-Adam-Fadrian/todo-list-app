import React, { useState } from "react";
import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTodo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [completed, setCompleted] = useState(todo.isCompleted);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setContent(todo.content);
    setCompleted(todo.isCompleted);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onUpdate(todo.id, {
      id: todo.id,
      content: content,
      isCompleted: completed,
    });
    setIsEditing(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCompleted(event.target.checked);
  };

  return (
    <div className="">
      {/* {JSON.stringify(todo)} */}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="gap-4">
          <input
            className="input input-primary input-bordered input-xs w-full max-w-xs bg-white"
            type="text"
            value={content}
            onChange={handleTitleChange}
          />

          <label>
            <input
              className="ml-2
            mr-2"
              type="checkbox"
              checked={completed}
              onChange={handleCompletedChange}
            />
            Completed
          </label>
          <button className="mr-2 ml-2 btn btn-xs btn-primary" type="submit">
            Save
          </button>
          <button
            className="btn btn-xs btn-primary"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-lg font-bold text-black">{todo.content}</h3>
          <p>{todo.isCompleted ? "Completed" : "Not Completed"}</p>
          <button
            className="btn btn-xs btn-wide mx-auto btn-secondary"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="btn btn-xs btn-wide mx-auto"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
