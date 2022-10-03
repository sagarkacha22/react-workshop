import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ToDo from "./ToDo";
// import ToDoApp from "./ToDoApp";
import UseEffect from "./UseEffect";
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
// const asyncAwait = async () => {
//   try {
//     const fetchTodo68 = fetch(
//       "https://jsonplaceholder.typicode.com/todos/68"
//     ).then((res) => res.json());
//     const fetchTodo67 = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/67"
//     );
//     const todo67 = await fetchTodo67.json();
//     const fetchAllTodos = await fetch(
//       "https://jsonplaceholder.typicode.com/todos"
//     );
//     const allTodos = await fetchAllTodos.json();
//     const promiseAll = await Promise.all([todo67, allTodos]);
//     console.log(promiseAll);
//     const todo68 = await fetchTodo68;
//     console.log(todo68);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const fetchTodo1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (res) => res.json()
// );

// asyncAwait()
//   .then(() => fetchTodo1)
//   .then(() => console.log("End!"));

// fetch("https://jsonplaceholder.typicode.com/todos/68")
//   .then((res) => res.json())
//   .then(body => console.log(body))

/* promises end */

// playing with json-server
// const createPost = async (data) => {
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   headers.append("Accept", "application/json");
//   try {
//     await fetch("http://localhost:3000/posts", {
//       headers,
//       method: "POST",
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((body) => console.log(body));
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getAllPosts = () => {
//   fetch("http://localhost:3000/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

// const getPost = (searchText = "", limit = 2) => {
//   const url = new URL("http://localhost:3000/posts");
//   url.searchParams.append("q", searchText);
//   url.searchParams.append("_limit", limit);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

// const sortByAuthor = () => {
//   const url = new URL("http://localhost:3000/posts");
//   url.searchParams.append("_sort", "author");
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

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

    {/* <ToDoApp /> */}

    <UseEffect />
  </React.StrictMode>,
  document.getElementById("root")
);
