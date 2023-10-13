import React from "react";
import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";
import "./estilos.css";

// El componente principal de la aplicación
const App = () => {
  return (
    <div className="card shadow rounded-4">
      <div className="card-body d-flex flex-column align-items-center text-center">
        {/* Título principal de la aplicación */}
        <h1>Aplicación de Tareas To-Do</h1>

        {/* Sección para agregar nuevas tareas */}
        <div>
          <h3>Agregar Tarea</h3>
          <ToDoAdd />
        </div>

        {/* Sección para mostrar el número de tareas */}
        <div className=" mt-4">
          <h5>Tareas en la lista: 4</h5>
          <h5>Tareas completadas: 2</h5>
          <h5>Tareas sin completar: 2</h5>
        </div>

        {/* Componente que muestra la lista de tareas */}
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
