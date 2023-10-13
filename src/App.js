import React from "react";
import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";
import "./estilos.css";
import { useToDo } from "./hooks/useToDo";

// El componente principal de la aplicación
const App = () => {
  const {
    todos,
    handleNewToDo,
    handleDeleteToDo,
    handleCompleteToDo,
    todosCount,
    pendingTodosCount,
    completedTodosCount,
  } = useToDo();

  return (
    <div className="card shadow rounded-4">
      <div className="card-body d-flex flex-column align-items-center text-center">
        {/* Título principal de la aplicación */}
        <h1>Aplicación de Tareas To-Do</h1>

        {/* Sección para agregar nuevas tareas */}
        <div className="text-center mb-4">
          <h3 className="mb-3 fs-4">Agregar Tarea</h3>
          <ToDoAdd handleNewToDo={handleNewToDo} />
        </div>

        {/* Sección para mostrar el número de tareas */}
        <div className=" mt-4">
          <h5>Tareas en la lista: {todosCount}</h5>
          <h5>Tareas completadas: {completedTodosCount}</h5>
          <h5>Tareas sin completar: {pendingTodosCount}</h5>
        </div>

        {/* Componente que muestra la lista de tareas */}
        <ToDoList
          todos={todos}
          handleDeleteToDo={handleDeleteToDo}
          handleCompleteToDo={handleCompleteToDo}
        />
      </div>
    </div>
  );
};

export default App;
