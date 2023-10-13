import React from "react";
import ToDoItem from "./ToDoItem";

// Componente que muestra la lista de tareas
const ToDoList = () => {
  return (
    <div>
      <ul>
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDoList;
