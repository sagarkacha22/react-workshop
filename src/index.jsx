import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ToDo from "./ToDo";
import ToDoApp from "./ToDoApp";
// import App from "./App";
// import Toggler from "./Toogler";
// import Counter from "./Counter";
// import Input from "./Input";

/* promises */
// fetch("https://jsonplaceholder.typicode.com/todos/35")
//   .then((res) => res.json())
//   .then((body) => console.log(body))
//   .catch((err) => console.error(err))
//   .then(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "POST",
//       headers: new Headers().append("Content-Type", "application/json"),
//       body: JSON.stringify({
//         title: "let's see",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log("yay! ", data))
//       .catch((err) => console.error(err))
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/67")
//   .then((res) => {
//     if (!res.ok) throw new Error("something went wrong!");
//     return res.json();
//   })
//   .then((body) => {
//     let title = body.title;
//     console.log(title);
//     fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "POST",
//       headers: new Headers().append("Content-Type", "application/json"),
//       body: JSON.stringify({
//         title,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log("yay! ", data.id));
//   })
//   .catch((err) => console.error(err));

// async await
const asyncAwait = async () => {
  const fetchTodo = await fetch("https://jsonplaceholder.typicode.com/todos/67")
  const todo = await fetchTodo.json()
  const fetchAllTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
  const allTodos = await fetchAllTodos.json()
  const promiseAll = await Promise.all([todo, allTodos])
  console.log(promiseAll)
}
asyncAwait()

/* promises end */

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

    <ToDoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
