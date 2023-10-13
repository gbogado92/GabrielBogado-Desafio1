import React from "react";
import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";
import "./estilos.css";
import { useToDo } from "./hooks/useToDo";

// El componente principal de la aplicación
const App = () => {
  // Utilizamos el hook personalizado useToDo para gestionar el estado y las acciones de la lista de tareas
  const {
    todos, // Lista de tareas
    handleNewToDo, // Función para agregar una nueva tarea
    handleDeleteToDo, // Función para eliminar una tarea
    handleCompleteToDo, // Función para marcar una tarea como completada
    todosCount, // Número total de tareas
    pendingTodosCount, // Número de tareas pendientes
    completedTodosCount, // Número de tareas completadas
  } = useToDo();

  return (
    <div className="card shadow rounded-4">
      <div className="card-body d-flex flex-column align-items-center text-center">
        {/* Título principal de la aplicación */}
        <h1>Aplicación de Tareas To-Do</h1>

        {/* Sección para agregar nuevas tareas */}
        <div className="text-center mb-4">
          <h3 className="mb-3 fs-4">Agregar Tarea</h3>
          {/* Componente ToDoAdd para agregar nuevas tareas, pasando la función handleNewToDo como prop */}
          <ToDoAdd handleNewToDo={handleNewToDo} />
        </div>

        {/* Sección para mostrar el número de tareas */}
        <div className=" mt-4">
          <h5>Tareas en la lista: {todosCount}</h5>
          <h5>Tareas completadas: {completedTodosCount}</h5>
          <h5>Tareas sin completar: {pendingTodosCount}</h5>
        </div>

        {/* Componente que muestra la lista de tareas, pasando datos y funciones como props */}
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
