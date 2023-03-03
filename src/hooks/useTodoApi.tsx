import { useState, useEffect, useCallback } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default function useTodoApi() {
  const [todoList, setTodoList] = useState<any>([]);
  const api = new TodoistApi("5752096b0def655b6dab9cde14a4928bdf60e68c");

  const fetchListTodo = useCallback(async () => {
    const todoListFetch = await api.getTasks();
    console.log("CALLED", todoListFetch);
    setTodoList(todoListFetch);
    return todoListFetch;
  }, []);

  const createTodoTask = useCallback(async (payload: any) => {
    const newTodo = await api.addTask({ ...payload });
    setTodoList([...todoList, newTodo]);
    return newTodo;
  }, []);

  const updateTodoTask = useCallback(async (payload: any) => {
    const newTodo = await api.updateTask(payload.id, { ...payload });
    setTodoList([...todoList, newTodo]);
    return newTodo;
  }, []);

  const deleteTodoTask = useCallback(async (payload: any) => {
    const deletedTodo = await api.deleteTask(payload.id);

    return deletedTodo;
  }, []);

  useEffect(() => {
    fetchListTodo();
  }, []);

  return { todoList, fetchListTodo, createTodoTask, updateTodoTask,deleteTodoTask };
}
