import { useState } from "react";
import Task from "./Task";

let taskNumber = 0;

export default function ToDo() {
  let [undoneTaskList, updateUndoneTaskList] = useState([]);
  let [doneTaskList, updateDoneTaskList] = useState([]);
  let [inputValue, updateInputValue] = useState("");

  let addTodo = () => {
    taskNumber += 1;
    document.getElementById("inputTask").value &&
      updateUndoneTaskList((oldTaskList) => [
        ...oldTaskList,
        { id: taskNumber, task: document.getElementById("inputTask").value },
      ]);
    if (
      !document.getElementById("inputTask").value &&
      document.getElementsByClassName("warning")[0].style.display !== "block"
    ) {
      document.getElementsByClassName("warning")[0].style.display = "block";
    }
    updateInputValue("");
  };

  let inputChange = (event) => {
    updateInputValue(event.target.value);
    if (
      event.target.value &&
      document.getElementsByClassName("warning")[0].style.display !== "none"
    ) {
      document.getElementsByClassName("warning")[0].style.display = "none";
    }
  };

  let taskChange = (event, key) => {
    if (event.target.checked) {
      let taskChecked = undoneTaskList.filter((task) => {
        return task.id === key;
      });
      updateDoneTaskList((oldTaskList) => [
        ...oldTaskList,
        { id: key, task: taskChecked[0].task },
      ]);
      updateUndoneTaskList([
        ...undoneTaskList.filter((task) => {
          return task.id !== key;
        }),
      ]);
    } else {
      let taskUnchecked = doneTaskList.filter((task) => {
        return task.id === key;
      });
      updateUndoneTaskList((oldTaskList) => [
        ...oldTaskList,
        { id: key, task: taskUnchecked[0].task },
      ]);
      updateDoneTaskList([
        ...doneTaskList.filter((task) => {
          return task.id !== key;
        }),
      ]);
    }
  };

  return (
    <>
      <input
        autoComplete="off"
        value={inputValue}
        id="inputTask"
        onChange={inputChange}
      ></input>
      <button onClick={addTodo}>Add</button>
      <p className="warning" style={{ color: "red", display: "none" }}>
        Cannot add empty task!
      </p>
      <br />
      <br />
      <div id="undoneTasks">
        {undoneTaskList.map((task) => (
          <div key={task.id}>
            <Task task={task} taskChange={taskChange}/>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div id="doneTasks">
        {doneTaskList.map((task) => (
          <div key={task.id}>
            <Task task={task} taskChange={taskChange} checked="checked"/>
          </div>
        ))}
      </div>
    </>
  );
}
