import React, { useContext, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ImMoveUp, ImMoveDown } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import TaskContext from "./contexts";
import axios from "axios";
// import TaskContext from "./contexts";

// export default function Task({ task, taskChange, checked }) {
//   return (
//     <>
//       <input
//         style={{ marginRight: 10 }}
//         className="form-check-input"
//         type="checkbox"
//         checked={checked}
//         onChange={(event) => taskChange(event, task.id)}
//       />
//       <label
//         className="form-check-label"
//         style={checked && { textDecoration: "line-through" }}
//       >
//         {task.task}
//       </label>
//     </>
//   );
// }

//new

export default function Task({ task }) {
  let [taskList, updateTaskList] = useContext(TaskContext);
  let [editMode, updateEditMode] = useState(false);
  let [taskValue, updateTaskValue] = useState(task.task);
  // let [priorityValue, updatePriorityValue] = useState(task.priority);

  const moveDownTask = () => {
    // console.log(taskList)
    let selectedTask = taskList.filter((t) => t.id === task.id);
    let index = taskList.indexOf(selectedTask[0]);
    let oldTaskList;
    oldTaskList = [...taskList];
    let temp = oldTaskList[index];
    oldTaskList[index] = oldTaskList[index + 1];
    oldTaskList[index + 1] = temp;
    // [oldTaskList[index], oldTaskList[index+1]] = [oldTaskList[index+1], oldTaskList[index]]
    updateTaskList(oldTaskList);
  };

  const moveUpTask = () => {
    // console.log(taskList)
    let selectedTask = taskList.filter((t) => t.id === task.id);
    let index = taskList.indexOf(selectedTask[0]);
    let oldTaskList;
    oldTaskList = [...taskList];
    let temp = oldTaskList[index];
    oldTaskList[index] = oldTaskList[index - 1];
    oldTaskList[index - 1] = temp;
    // [oldTaskList[index], oldTaskList[index+1]] = [oldTaskList[index+1], oldTaskList[index]]
    updateTaskList(oldTaskList);
  };

  const deleteTask = () => {
    axios.delete(`http://localhost:3000/toDo/${task.id}`);

    let selectedTask = taskList.filter((t) => t.id === task.id);
    let index = taskList.indexOf(selectedTask[0]);
    let oldTaskList;
    oldTaskList = [...taskList];
    oldTaskList.splice(index, 1);
    updateTaskList(oldTaskList);
  };

  const editTask = () => {
    updateEditMode(true);
  };

  const saveTask = () => {
    axios.put(`http://localhost:3000/toDo/${task.id}`, {
      task: taskValue,
    });

    updateEditMode(false);
    task.task = taskValue;
  };

  // const priorityChanged = (event) => {
  //   updatePriorityValue(event.target.value);
  //   if (event.target.value) {
  //     task.priority = Number(event.target.value);
  //     let newTaskList = [...taskList].sort((a, b) => {
  //       return a.priority - b.priority;
  //     });
  //     updateTaskList(newTaskList);
  //   }
  // };

  return (
    <div key={task.id} className="container">
      <div className="row">
        <div className="col d-flex align-items-center">
          {/* <input
            className="form-control flex-row me-3"
            style={{ width: "10%" }}
            value={priorityValue}
            onChange={(event) => priorityChanged(event)}
          /> */}
          {editMode ? (
            <input
              className="form-control w-75 flex-row"
              value={taskValue}
              onChange={(event) => updateTaskValue(event.target.value)}
            />
          ) : (
            <div>{task.task}</div>
          )}
        </div>
        <div className="col d-flex flex-row-reverse">
          <button
            className="moveDown btn btn-outline-secondary me-2"
            onClick={moveDownTask}
            disabled={taskList[taskList.length - 1] === task}
          >
            <ImMoveDown />
          </button>
          <button
            className="moveUp btn btn-outline-secondary me-2"
            onClick={moveUpTask}
            disabled={taskList[0] === task}
          >
            <ImMoveUp />
          </button>
          <button
            className="delete btn btn-outline-danger me-2"
            onClick={deleteTask}
          >
            <AiFillDelete />
          </button>
          {editMode ? (
            <button
              className="edit btn btn-outline-primary me-2"
              onClick={saveTask}
            >
              <TiTick />
            </button>
          ) : (
            <button
              className="edit btn btn-outline-primary me-2"
              onClick={editTask}
            >
              <BiEditAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
