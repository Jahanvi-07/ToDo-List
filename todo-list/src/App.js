import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>✅ To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
