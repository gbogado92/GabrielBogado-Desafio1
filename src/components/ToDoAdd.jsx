import React from "react";
import { useForm } from "../hooks/useForm";

// Componente que permite agregar nuevas tareas
const ToDoAdd = ({ handleNewToDo }) => {
  // Utilizamos el hook personalizado useForm para gestionar el estado del formulario
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Validamos que la descripción de la tarea tenga al menos 2 caracteres
    if (description.length <= 1) return;

    // Creamos un nuevo objeto de tarea con una ID única y la descripción ingresada
    let newToDo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    // Llamamos a la función handleNewToDo para agregar la nueva tarea
    handleNewToDo(newToDo);

    // Reseteamos el formulario después de agregar la tarea
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit} className="d-flex gap-2">
      {/* Campo de entrada para la descripción de la tarea */}
      <input
        type="text"
        className="form-control rounded-pill"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Ingresa una nueva tarea..."
      />

      <button type="submit" className="btn btn-outline-success rounded-pill">
        Agregar
      </button>
    </form>
  );
};

export default ToDoAdd;
