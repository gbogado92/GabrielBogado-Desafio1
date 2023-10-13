export const todoreducer = (initialState, action) => {
  // El reductor toma el estado inicial y una acción como argumentos.

  switch (action.type) {
    // Se utiliza un switch para evaluar el tipo de acción que se está realizando.

    case "Add ToDo":
      // Si la acción es de tipo "Add ToDo," se agrega una nueva tarea al estado.
      return [...initialState, action.payload];

    case "Delete ToDo":
      // Si la acción es de tipo "Delete ToDo," se elimina una tarea del estado.
      // Se utiliza el método "filter" para crear un nuevo array que excluye la tarea a eliminar.
      return initialState.filter((todo) => todo.id !== action.payload);

    case "Complete ToDo":
      // Si la acción es de tipo "Complete ToDo," se marca una tarea como completada o no completada.
      // Se utiliza el método "map" para crear un nuevo array de tareas.
      // Si el ID de la tarea coincide con el de la acción, se invierte el valor de "done."
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return initialState;
  }
};
