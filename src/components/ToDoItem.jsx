import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ToDoUpdate from "./ToDoUpdate";

// Componente que representa un elemento de la lista de tareas (por hacer)
const ToDoItem = ({
  todo, // Objeto que representa la tarea
  handleUpdateToDo, // Función para actualizar la tarea
  handleDeleteToDo, // Función para eliminar la tarea
  handleCompleteToDo, // Función para marcar la tarea como completada
}) => {
  // Estilo del círculo que indica si la tarea está hecha o no
  const labelStyle = {
    width: "24px",
    height: "24px",
    cursor: "pointer",
    backgroundColor: todo.done ? "green" : "white",
    border: "2px solid #28a745",
  };

  return (
    <li>
      {/* Marcar como completada al hacer clic en el círculo */}
      <span onClick={() => handleCompleteToDo(todo.id)}>
        <label
          className="d-inline-block rounded-circle"
          style={labelStyle}
        ></label>
      </span>
      {/* Componente ToDoUpdate para actualizar la tarea */}
      <ToDoUpdate todo={todo} handleUpdateToDo={handleUpdateToDo} />
      {/* Botón para eliminar la tarea */}
      <button
        className="btn btn-outline-danger rounded-circle"
        style={{ width: "40px", height: "40px" }}
        onClick={() => {
          handleDeleteToDo(todo.id);
        }}
      >
        <span className="d-flex align-items-center justify-content-center">
          <FaTrashAlt />
        </span>
      </button>
    </li>
  );
};

export default ToDoItem;
