import React, { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ImMoveUp, ImMoveDown } from "react-icons/im";
import TaskContext from "./contexts";

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

  const moveDownTask = (id) => {
    task = taskList.filter((t) => t.id === id);
    // console.log(task)

  };

  const moveUpTask = (id) => {};

  const deleteTask = () => {};

  const editTask = () => {
    console.log("edit");
  };

  return (
    <div key={task.id} className="container">
      <div className="row">
        <div className="col">
          <p>{task.task}</p>
        </div>
        <div className="col d-flex flex-row-reverse">
          {console.log(taskList[0].id, task.id, taskList[taskList.length-1].id)}
          {console.log(taskList[0].id === task.id)}
          <button
            className="moveDown btn btn-outline-primary me-2"
            onClick={moveDownTask(task.id)}
            disabled={
              taskList[taskList.length - 1].id === task.id ? true : false
            }
          >
            <ImMoveDown />
          </button>
          <button
            className="moveUp btn btn-outline-primary me-2"
            onClick={moveUpTask(task.id)}
            disabled={taskList[0].id === task.id && "disabled"}
          >
            <ImMoveUp />
          </button>
          <button
            className="delete btn btn-outline-primary me-2"
            onClick={deleteTask}
          >
            <AiFillDelete />
          </button>
          <button
            className="edit btn btn-outline-primary me-2"
            onClick={editTask}
          >
            <BiEditAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
