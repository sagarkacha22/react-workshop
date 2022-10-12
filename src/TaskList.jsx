import React, { useEffect, useState } from "react";
// import TaskContext from "./contexts";
import Task from "./Task";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

function TaskList({ taskList, updateTaskList }) {
  let [loading, updateLoading] = useState(true);
  let [isError, updateIsError] = useState(false);

  useEffect(() => {
    updateLoading(true);
    axios
      .get("http://localhost:3000/toDo")
      .then((body) => {
        updateLoading(false);
        updateTaskList(body["data"]);
      })
      .catch((err) => {
        updateIsError(true);
        console.log(err);
      });
  }, []);

  return (
    <div id="taskList" className="container w-75">
      {loading && (
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
      )}
      {!loading &&
        !isError &&
        taskList.map((task) => (
          <div key={task.id} className="row mb-2">
            <Task task={task} />
          </div>
        ))}
    </div>
  );
}

export default TaskList;
