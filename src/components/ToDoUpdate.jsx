import React, { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

// Componente que permite actualizar una tarea
const ToDoUpdate = ({ todo, handleUpdateToDo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInpuntRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateToDo(id, description);

    setDisabled(!disabled);

    focusInpuntRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate} className="d-flex gap-2">
      {/* Campo de entrada para editar la descripción de la tarea */}
      <input
        type="text"
        className={`form-control border-0 font-weight-bold font-family-inherit font-size-18 text-dark w-100 shadow-none ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Ingresa una nueva tarea"
        readOnly={disabled}
        ref={focusInpuntRef}
      />
    </form>
  );
};

export default ToDoUpdate;
