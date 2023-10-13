import React from "react";

// Componente que permite agregar nuevas tareas
const ToDoAdd = () => {
  return (
    <form className="d-flex gap-2">
      {/* Campo de entrada para la descripción de la tarea */}
      <input
        type="text"
        className="form-control rounded-pill"
        name="description"
        placeholder="Ingresa una nueva tarea..."
      />

      <button type="submit" className="btn btn-outline-success rounded-pill">
        Agregar
      </button>
    </form>
  );
};

export default ToDoAdd;
