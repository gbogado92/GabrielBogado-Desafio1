import React from "react";
import ToDoItem from "./ToDoItem";

// Componente que muestra la lista de tareas
const ToDoList = ({ todos, handleDeleteToDo, handleCompleteToDo }) => {
  return (
    <ul className="list-group mx-auto">
      {" "}
      {/* Agrega la clase "list-group" para centrar el contenido */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleDeleteToDo={handleDeleteToDo}
          handleCompleteToDo={handleCompleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
