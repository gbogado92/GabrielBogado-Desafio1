import { useEffect, useReducer } from "react";
import { todoreducer } from "../reducer/todoreducer";

export const useToDo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoreducer, initialState, init);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  // Contar las tareas completadas
  const completedTodosCount = todos.filter((todo) => todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewToDo = (todo) => {
    const action = {
      type: "Add ToDo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteToDo = (id) => {
    const action = {
      type: "Delete ToDo",
      payload: id,
    };
    dispatch(action);
  };

  const handleCompleteToDo = (id) => {
    const action = {
      type: "Complete ToDo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    completedTodosCount,
    handleNewToDo,
    handleDeleteToDo,
    handleCompleteToDo,
  };
};
