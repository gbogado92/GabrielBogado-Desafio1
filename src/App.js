import React from "react";
import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";

// El componente principal de la aplicación
const App = () => {
  return (
    <div>
      {/* Título principal de la aplicación */}
      <h1>Aplicación de Tareas To-Do</h1>

      {/* Sección para agregar nuevas tareas */}
      <div>
        <h3>Agregar Tarea</h3>
        <ToDoAdd />
      </div>

      {/* Sección para mostrar el número de tareas */}
      <div>
        <h3>Nro. de tareas: 4</h3>
        <h3>Nro. de tareas pendientes: 3</h3>
      </div>

      {/* Componente que muestra la lista de tareas */}
      <ToDoList />
    </div>
  );
};

export default App;
