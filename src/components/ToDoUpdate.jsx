import React from "react";

// Componente que permite actualizar una tarea
const ToDoUpdate = () => {
  return (
    <form className="d-flex gap-2">
      {/* Campo de entrada para editar la descripción de la tarea */}
      <input
        className="form-control border-0 font-weight-bold font-family-inherit font-size-18 text-dark w-100 shadow-none"
        type="text"
        name="description"
      />
    </form>
  );
};

export default ToDoUpdate;
