import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ToDoUpdate from "./ToDoUpdate";

// Componente que representa un elemento de la lista de tareas (por hacer)
const ToDoItem = () => {
  return (
    <li>
      <span>
        <label htmlFor=""></label>
      </span>
      <ToDoUpdate /> {/* Componente para actualizar la tarea */}
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default ToDoItem;
