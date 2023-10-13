import React from "react";

// Componente que permite agregar nuevas tareas
const ToDoAdd = () => {
  return (
    <form>
      {/* Campo de entrada para la descripción de la tarea */}
      <input
        type="text"
        name="description"
        placeholder="Ingresa una nueva tarea..."
      />

      <button type="button">Agregar</button>
    </form>
  );
};

export default ToDoAdd;
