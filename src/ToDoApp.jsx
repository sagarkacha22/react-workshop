import React, { Suspense, useState } from "react";
import AddTask from "./AddTask";
import TaskContext from "./contexts";
// import ErrorBoundary from "./ErrorBoundary";
import TaskList from "./TaskList";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ToDoApp() {
  let [, updateTaskList] = useState([]);
  let { data: taskList } = useQuery(["todos"], () =>
    axios.get("http://localhost:3000/toDo").then((res) => res.data)
  );

  return (
    <>
      <TaskContext.Provider value={[taskList, updateTaskList]}>
        <div className="h-100 d-flex align-items-center justify-content-center m-5 px-5 pb-3">
          <AddTask taskList={taskList} updateTaskList={updateTaskList} />
        </div>
        {/* {isLoading && <h2>Loading...</h2>}
      {isError && <h2>SOmething went wrong!</h2>} */}
        <ErrorBoundary fallback={<h1>Something went wrong!!</h1>}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <TaskList taskList={taskList} updateTaskList={updateTaskList} />
          </Suspense>
        </ErrorBoundary>
      </TaskContext.Provider>
    </>
  );
}

export default ToDoApp;
