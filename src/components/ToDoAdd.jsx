import React from "react";
import { useForm } from "../hooks/useForm";

// Componente que permite agregar nuevas tareas
const ToDoAdd = ({ handleNewToDo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newToDo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewToDo(newToDo);
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
