import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ToDoUpdate from "./ToDoUpdate";

// Componente que representa un elemento de la lista de tareas (por hacer)
const ToDoItem = ({
  todo,
  handleUpdateToDo,
  handleDeleteToDo,
  handleCompleteToDo,
}) => {
  const labelStyle = {
    width: "24px",
    height: "24px",
    cursor: "pointer",
    backgroundColor: todo.done ? "green" : "white",
    border: "2px solid #28a745",
  };

  return (
    <li>
      <span onClick={() => handleCompleteToDo(todo.id)}>
        <label
          className="d-inline-block rounded-circle"
          style={labelStyle}
        ></label>
      </span>
      <ToDoUpdate todo={todo} handleUpdateToDo={handleUpdateToDo} />
      {/* Componente para actualizar la tarea */}
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
