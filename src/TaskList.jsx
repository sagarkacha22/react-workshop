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

  // let [taskList, updateTaskList] = useContext(TaskContext);

  // const moveDownTask = (task) => {
  //   // console.log(taskList)
  //   let selectedTask = taskList.filter((t) => t.id === task.id);
  //   let index = taskList.indexOf(selectedTask[0])
  //   let oldTaskList
  //   oldTaskList = [...taskList]
  //   let temp = oldTaskList[index]
  //   oldTaskList[index] = oldTaskList[index+1]
  //   oldTaskList[index+1] = temp
  //   // [oldTaskList[index], oldTaskList[index+1]] = [oldTaskList[index+1], oldTaskList[index]]
  //   updateTaskList(oldTaskList)
  // };

  // const moveUpTask = (task) => {
  //   // console.log(taskList)
  //   let selectedTask = taskList.filter((t) => t.id === task.id);
  //   let index = taskList.indexOf(selectedTask[0])
  //   let oldTaskList
  //   oldTaskList = [...taskList]
  //   let temp = oldTaskList[index]
  //   oldTaskList[index] = oldTaskList[index-1]
  //   oldTaskList[index-1] = temp
  //   // [oldTaskList[index], oldTaskList[index+1]] = [oldTaskList[index+1], oldTaskList[index]]
  //   updateTaskList(oldTaskList)
  // };

  // const deleteTask = (task) => {
  //   let selectedTask = taskList.filter((t) => t.id === task.id);
  //   let index = taskList.indexOf(selectedTask[0])
  //   let oldTaskList
  //   oldTaskList = [...taskList]
  //   oldTaskList.splice(index, 1)
  //   updateTaskList(oldTaskList)
  // }

  return (
    <div id="taskList" className="container w-75">
      {/* {console.log(taskList)} */}
      {/* {taskList.map((task) => (
        // <li key={task.id}>
        //   <p>{task.task}</p>
        // </li>

        <div key={task.id} className="row mb-2">
          <Task task={task} />
        </div>
      ))} */}

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
