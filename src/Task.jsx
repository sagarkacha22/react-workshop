import React from "react";

export default function Task({ task, taskChange, checked }) {
  return (
    <>
      <input
        style={{ marginRight: 10 }}
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={(event) => taskChange(event, task.id)}
      />
      <label
        className="form-check-label"
        style={checked && { textDecoration: "line-through" }}
      >
        {task.task}
      </label>
    </>
  );
}
