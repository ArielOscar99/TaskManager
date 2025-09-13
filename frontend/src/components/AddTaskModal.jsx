import React, { useState } from "react";

function AddTaskModal({ onClose, onAdd }) {
  const [task, setTask] = useState({
    body: "",
    deadline: "",
    color: "lightblue",
    completed: false,
    dateCreated: new Date().toISOString().split("T")[0],
    id: Date.now().toString(),
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeStyle} onClick={onClose}>X</button>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="body"
            placeholder="Task description"
            value={task.body}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            required
          />
          <select name="color" value={task.color} onChange={handleChange}>
            <option value="lightblue">Blue</option>
            <option value="lightgreen">Green</option>
            <option value="lightcoral">Red</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="teal">Teal</option>
            <option value="gray">Gray</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
  justifyContent: "center", alignItems: "center"
};

const modalStyle = {
  backgroundColor: "white", padding: "20px", borderRadius: "8px",
  width: "300px", position: "relative"
};

const closeStyle = { position: "absolute", top: "10px", right: "10px" };

export default AddTaskModal;
