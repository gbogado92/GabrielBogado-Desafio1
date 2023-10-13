import { useState } from "react";

// Hook personalizado para gestionar el estado de formularios
export const useForm = (initialForm = {}) => {
  // Estado del formulario, inicializado con los valores proporcionados
  const [formState, setFormState] = useState(initialForm);

  // Función para manejar el cambio en los campos del formulario
  const onInputChange = (e) => {
    const name = e.target.name; // Nombre del campo
    const value = e.target.value; // Valor del campo

    // Actualiza el estado del formulario copiando los valores anteriores y sobrescribiendo el campo actual
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Función para restablecer el formulario a su estado inicial
  const onResetForm = () => {
    setFormState(initialForm);
  };

  // Devuelve un objeto que incluye el estado actual del formulario, la función para manejar cambios en los campos y la función para restablecer el formulario
  return {
    ...formState, // Proporciona el estado actual del formulario
    onInputChange, // Función para manejar cambios en los campos
    onResetForm, // Función para restablecer el formulario
  };
};
