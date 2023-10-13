import { useEffect, useReducer } from "react";
import { todoreducer } from "../reducer/todoreducer";

export const useToDo = () => {
  // Estado inicial de la lista de tareas (vacío)
  const initialState = [];

  // Función init para obtener el estado de la lista de tareas desde el almacenamiento local (localStorage)
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  // Utiliza useReducer para gestionar el estado de la lista de tareas
  const [todos, dispatch] = useReducer(todoreducer, initialState, init);

  // Calcula el número total de tareas
  const todosCount = todos.length;

  // Calcula el número de tareas pendientes (no completadas)
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  // Calcula el número de tareas completadas
  const completedTodosCount = todos.filter((todo) => todo.done).length;

  // Guarda el estado de la lista de tareas en el almacenamiento local (localStorage)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Función para agregar una nueva tarea
  const handleNewToDo = (todo) => {
    const action = {
      type: "Add ToDo",
      payload: todo,
    };
    dispatch(action);
  };

  // Función para eliminar una tarea
  const handleDeleteToDo = (id) => {
    const action = {
      type: "Delete ToDo",
      payload: id,
    };
    dispatch(action);
  };

  // Función para marcar una tarea como completada
  const handleCompleteToDo = (id) => {
    const action = {
      type: "Complete ToDo",
      payload: id,
    };
    dispatch(action);
  };

  // Devuelve un objeto con el estado de la lista de tareas y las funciones para interactuar con ella
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
