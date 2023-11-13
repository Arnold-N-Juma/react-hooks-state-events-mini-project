import React from "react";

function Task({ Task, onDelete }) {
  if (!Task) {
    return null;
  }

  return (
    <div className="task">
      <div className="label">{Task.category}</div>
      <div className="text">{Task.text}</div>
      <button className="delete" onClick={() => onDelete(Task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
