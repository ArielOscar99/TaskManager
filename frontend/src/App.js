import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/Tasks/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import * as taskAPI from "./taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load tasks from backend
  const fetchTasks = async () => {
    const data = await taskAPI.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const updatedTasks = await taskAPI.createTask(task);
    setTasks(updatedTasks);
  };

  const deleteTaskById = async (id) => {
    const updatedTasks = await taskAPI.deleteTask(id);
    setTasks(updatedTasks);
  };

  const completeTaskById = async (id) => {
    const updatedTasks = await taskAPI.completeTask(id);
    setTasks(updatedTasks);
  };

  const searchTasks = async (query) => {
    if (!query) return fetchTasks(); // if empty, load all
    const results = await taskAPI.searchTask(query);
    setTasks(results);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header
        onAddClick={() => setIsModalOpen(true)}
        onSearch={searchTasks}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={completeTaskById}
      />
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} onAdd={addTask} />}
    </div>
  );
}

export default App;
