import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function ToDoApp() {

    let [taskList, updateTaskList] = useState([]);

  return (
    <>
      <div className="h-100 d-flex align-items-center justify-content-center m-5 px-5 pb-3">
        <AddTask updateTaskList={updateTaskList} />
      </div>
      <TaskList taskList={taskList} />
    </>
  );
}

export default ToDoApp;
