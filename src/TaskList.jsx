// import React, { useEffect, useState } from "react";
import React from "react";
// import TaskContext from "./contexts";
import Task from "./Task";
// import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
// import { FaSpinner } from "react-icons/fa";

// let isResolved = false;
// let taskList = null;
// const getData = axios.get("http://localhost:3000/toDo");

function TaskList({ taskList, updateTaskList }) {
  const queryClient = useQueryClient();
  taskList = queryClient.getQueryData(["todos"]);

  // getData.then((res) => {
  //   isResolved = true;
  //   // taskList = res.data;
  //   updateTaskList(res.data);
  // });

  // let [loading, updateLoading] = useState(true);
  // let [isError, updateIsError] = useState(false);

  // useEffect(() => {
  //   updateLoading(true);
  //   axios
  //     .get("http://localhost:3000/toDo")
  //     .then((body) => {
  //       updateLoading(false);
  //       updateTaskList(body["data"]);
  //     })
  //     .catch((err) => {
  //       updateIsError(true);
  //       console.log(err);
  //     });
  // }, []);

  // if (!isResolved) {
  //   throw getData;
  // }

  return (
    <div id="taskList" className="container w-75">
      {/* {loading && (
        <div
          className="loading d-flex justify-content-center"
          style={{ fontSize: 48 }}
        >
          <FaSpinner />
        </div>
      )}
      {isError && (
        <div
          className="error d-flex justify-content-center"
          style={{ color: "red", fontSize: 20 }}
        >
          Opps! Something's not right.
        </div>
      )} */}
      {taskList?.map((task) => (
        <div key={task.id} className="row mb-2">
          <Task task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
