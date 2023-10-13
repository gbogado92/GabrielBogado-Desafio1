import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ToDoUpdate from "./ToDoUpdate";

// Componente que representa un elemento de la lista de tareas (por hacer)
const ToDoItem = () => {
  return (
    <li>
      <span className="labelStyle">
        <label className="d-inline-block rounded-circle"></label>
      </span>
      <ToDoUpdate /> {/* Componente para actualizar la tarea */}
      <button
        className="btn btn-outline-danger rounded-circle"
        style={{ width: "40px", height: "40px" }}
      >
        <span className="d-flex align-items-center justify-content-center">
          <FaTrashAlt />
        </span>
      </button>
    </li>
  );
};

export default ToDoItem;
