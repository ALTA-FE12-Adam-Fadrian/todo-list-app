import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Todo } from "./components/Todo";
import axios from "axios";
import useTodoApi from "./hooks/useTodoApi";

const App: React.FC = () => {
  const { todoList, fetchListTodo, createTodoTask, deleteTodoTask } =
    useTodoApi();

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = async (todo: Todo) => {
    try {
      console.log("DEBUG todo", todo);
      const result = await createTodoTask(todo);

      setTodos([...todos, result]);
      fetchListTodo();
      return result;
    } catch (error: any) {}
  };

  const handleUpdate = (id: string, updatedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id: string) => {
    deleteTodoTask({ id });
  };

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      <TodoList onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
