import React from "react";
import ToDoItem from "./ToDoItem";

// Componente que muestra la lista de tareas
const ToDoList = () => {
  return (
    <ul className="list-group mx-auto">
      <ToDoItem />
    </ul>
  );
};

export default ToDoList;
