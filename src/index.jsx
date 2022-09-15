import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Toggler from "./Toogler";
import Counter from "./Counter";
import Input from "./Input";

ReactDOM.render(
  <React.StrictMode>
    {/* <App greetings = 'Hello' name='Sagar' />
    <App greetings = 'Hi' name='Jatin' />
    <App greetings = 'Bye' name='Sagar' style={{background: 'green'}}/>
    <App name='Sagar' style={{background: 'yellow'}}/> */}
    <h2>Toggler:</h2>
    <Toggler />
    <br /><hr /><br />
    <h2>Counter:</h2>
    <Counter />
    <br /><hr /><br />
    <h2>Input:</h2>
    <Input defaultValue='hi'/>
  </React.StrictMode>,
  document.getElementById("root")
);

