import React from "react";

function TaskItem({ task, onDelete, onComplete }) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "6px",
        marginBottom: "8px",
        backgroundColor: task.color
      }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task._id)}
        />
        <div style={{ flex: 1, marginLeft: "10px" }}>
          <p style={{
            margin: 0,
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#777" : "#000"
          }}>
            {task.body}
          </p>
          <small>
            Created: {new Date(task.dateCreated).toLocaleDateString()} | Deadline: {new Date(task.deadline).toLocaleDateString()}
          </small>
        </div>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    );
  }

  export default TaskItem;

  