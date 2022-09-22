import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
// import TaskList from "./TaskList";

function AddTask({ updateTaskList }) {
  let [taskInput, updateTaskInput] = useState("");

  let addToDo = () => {
    taskInput &&
      updateTaskList((oldTaskList) => [
        ...oldTaskList,
        { id: uuid(), task: taskInput },
      ]);
      updateTaskInput("")
  };

  return (
    <>
      <input
        className="me-3 form-control w-50"
        autoComplete="off"
        value={taskInput}
        id="inputTask"
        onChange={(event) => updateTaskInput(event.target.value)}
      ></input>
      <button
        disabled={taskInput === "" && "disabled"}
        className="btn btn-primary me-3"
        onClick={addToDo}
      >
        <MdAdd />
      </button>
      <button className="btn btn-primary">Clear</button>
    </>
  );
}

export default AddTask;
