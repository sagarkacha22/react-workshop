// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom";
// import { ErrorBoundary } from "react-error-boundary";
// import App from "./App";
import "./index.css";
// import ToDo from "./ToDo";
// import ToDoApp from "./ToDoApp";
// import UserProfileHeader from "./UserProfileHeader";
// import App from "./App";
// import Toggler from "./Toogler";
// import Counter from "./Counter";
// import Input from "./Input";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import HeaderNavBar from "./HeaderNavBar";

// const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* <App greetings = 'Hello' name='Sagar' />
    <App greetings = 'Hi' name='Jatin' />
    <App greetings = 'Bye' name='Sagar' style={{background: 'green'}}/>
    <App name='Sagar' style={{background: 'yellow'}}/> */}

    {/* <h2>Toggler:</h2>
    <Toggler />
    <br /><hr /><br />
    <h2>Counter:</h2>
    <Counter />
    <br /><hr /><br />
    <h2>Input:</h2>
    <Input defaultValue='hi'/> */}

    {/* <ToDo /> */}

    {/* <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<h1>Something went wrong!!</h1>}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserProfileHeader />
        </Suspense>
      </ErrorBoundary>
      <ToDoApp />
    </QueryClientProvider> */}

    <BrowserRouter>
      <HeaderNavBar />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
