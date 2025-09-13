import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/Tasks/TaskList";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", body: "Finish homework", dateCreated: "2025-09-13", deadline: "2025-09-20", color: "lightblue", completed: false },
    { id: "2", body: "Buy groceries", dateCreated: "2025-09-12", deadline: "2025-09-15", color: "lightgreen", completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header onAddClick={() => setIsModalOpen(true)} />
      <TaskList tasks={tasks} />
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} onAdd={addTask} />}
    </div>
  );
}

export default App;
