import React from "react";
import { AiFillEdit } from "react-icons/ai";

// Componente que permite actualizar una tarea
const ToDoUpdate = () => {
  return (
    <form>
      {/* Campo de entrada para editar la descripción de la tarea */}
      <input type="text" name="description" />

      {/* Botón para editar/guardar la edición */}
      <button type="button">
        <AiFillEdit />
      </button>
    </form>
  );
};

export default ToDoUpdate;
