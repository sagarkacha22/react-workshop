import React, { Suspense, useState } from "react";
import AddTask from "./AddTask";
import TaskContext from "./contexts";
// import ErrorBoundary from "./ErrorBoundary";
import TaskList from "./TaskList";
import { ErrorBoundary } from "react-error-boundary";

function ToDoApp() {
  let [taskList, updateTaskList] = useState([]);

  return (
    <>
      <div className="h-100 d-flex align-items-center justify-content-center m-5 px-5 pb-3">
        <AddTask updateTaskList={updateTaskList} />
      </div>
      <ErrorBoundary fallback={<h1>Something went wrong!!</h1>}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TaskContext.Provider value={[taskList, updateTaskList]}>
            <TaskList taskList={taskList} updateTaskList={updateTaskList} />
          </TaskContext.Provider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default ToDoApp;
