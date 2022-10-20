import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
// import { MdAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
// import TaskList from "./TaskList";

function AddTask() {
  let [task, updateTask] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    ({ id, task }) => {
      axios
        .post("http://localhost:3000/toDo", {
          id,
          task,
        })
        .then((res) => res.data);
    },
    {
      onSuccess: (data, variables) => {
        // console.log(taskList, variables)
        // updateTaskList((oldTaskList) => {
        //   console.log(oldTaskList, variables, [...oldTaskList, variables])
        //   return [...oldTaskList, variables]
        // });
        const tasks = queryClient.getQueryData(["todos"]);
        // console.log(queryClient.getQueryData(["todos"]))
        queryClient.setQueryData(["todos"], [...tasks, variables]);
        // console.log(queryClient.getQueryData(["todos"]))
        // updateTaskList([...taskList, variables]);
        updateTask("");
      },
    }
  );

  let addToDo = () => {
    // let id = uuid();
    // task &&
    //   axios.post("http://localhost:3000/toDo", {
    //     id: id,
    //     task: task,
    //   });
    // task &&
    //   updateTaskList((oldTaskList) => [
    //     ...oldTaskList,
    //     { id: id, task: task },
    //   ]);
    task && mutate({ id: uuid(), task });
    // const tasks = queryClient.getQueryData(["todos"]);
    // queryClient.setQueryData(
    //   ["todos"],
    //   [...tasks, { id: id, task: task }]
    // );
  };

  return (
    <>
      <input
        className="me-3 form-control w-50"
        disabled={isLoading}
        autoComplete="off"
        value={task}
        id="inputTask"
        onChange={(event) => updateTask(event.target.value)}
      ></input>
      <button
        disabled={(isLoading || task === "") && "disabled"}
        className="btn btn-primary me-3"
        onClick={addToDo}
      >
        {/* <MdAdd /> */}
        Add
      </button>
      <button
        className="btn btn-primary"
        disabled={task === "" && "disabled"}
        onClick={() => updateTask("")}
      >
        Clear
      </button>
    </>
  );
}

export default AddTask;
