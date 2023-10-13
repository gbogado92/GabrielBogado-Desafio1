import React, { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

// Componente que permite actualizar una tarea
const ToDoUpdate = ({ todo, handleUpdateToDo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disabled, setDisabled] = useState(true); // Estado para habilitar o deshabilitar la edición
  const focusInputRef = useRef(); // Referencia para enfocar el campo de entrada

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    // Llama a la función para actualizar la tarea
    handleUpdateToDo(id, description);

    // Cambia el estado para deshabilitar la edición
    setDisabled(!disabled);

    // Enfoca el campo de entrada después de la actualización
    focusInputRef.current.focus();
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
        ref={focusInputRef}
      />
    </form>
  );
};

export default ToDoUpdate;
