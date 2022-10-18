import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
// import { MdAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
// import TaskList from "./TaskList";

function AddTask({ updateTaskList }) {
  let [taskInput, updateTaskInput] = useState("");
  const queryClient = useQueryClient();

  let addToDo = () => {
    let id = uuid();
    taskInput &&
      axios.post("http://localhost:3000/toDo", {
        id: id,
        task: taskInput,
      });
    taskInput &&
      updateTaskList((oldTaskList) => [
        ...oldTaskList,
        { id: id, task: taskInput },
      ]);
    const tasks = queryClient.getQueryData(["todos"]);
    queryClient.setQueryData(
      ["todos"],
      [...tasks, { id: id, task: taskInput }]
    );
    updateTaskInput("");
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
        {/* <MdAdd /> */}
        Add
      </button>
      <button
        className="btn btn-primary"
        disabled={taskInput === "" && "disabled"}
        onClick={() => updateTaskInput("")}
      >
        Clear
      </button>
    </>
  );
}

export default AddTask;
