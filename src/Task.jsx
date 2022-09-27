import React, { useContext, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ImMoveUp, ImMoveDown } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import TaskContext from "./contexts";
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
  let [taskValue, updateTaskValue] = useState(task.task)

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
    updateEditMode(false)
    task.task = taskValue
  };

  return (
    <div key={task.id} className="container">
      <div className="row">
        <div className="col">
          {editMode ? (
            <input className="form-control w-75" value={taskValue} onChange={(event) => updateTaskValue(event.target.value)} />
          ) : (
            <p>{task.task}</p>
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
