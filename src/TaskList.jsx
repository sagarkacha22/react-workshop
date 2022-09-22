import React from "react";

function TaskList({ taskList }) {
  return (
    <div
      id="taskList"
      className="h-100 d-flex align-items-center justify-content-center"
    >
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>{task.task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
