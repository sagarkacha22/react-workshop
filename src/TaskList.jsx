import React from "react";
import Task from "./Task";

function TaskList({ taskList }) {
  return (
    <div
      id="taskList"
      className="container w-75"
    >
      {taskList.map((task) => (
        // <li key={task.id}>
        //   <p>{task.task}</p>
        // </li>

        <div key={task.id} className="row mb-2">
          <Task task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
