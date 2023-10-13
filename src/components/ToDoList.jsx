import React from "react";
import ToDoItem from "./ToDoItem";

// Componente que muestra la lista de tareas
const ToDoList = ({ todos, handleDeleteToDo, handleCompleteToDo }) => {
  return (
    <ul className="list-group mx-auto">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // Clave única para cada elemento de la lista
          todo={todo} // Objeto que representa la tarea
          handleDeleteToDo={handleDeleteToDo} // Función para eliminar la tarea
          handleCompleteToDo={handleCompleteToDo} // Función para marcar la tarea como completada
        />
      ))}
    </ul>
  );
};

export default ToDoList;
