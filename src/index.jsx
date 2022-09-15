import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App greetings = 'Hello' name='Sagar' />
    <App greetings = 'Hi' name='Jatin' />
    <App greetings = 'Bye' name='Sagar' style={{background: 'green'}}/>
    <App name='Sagar' style={{background: 'yellow'}}/>
  </React.StrictMode>,
  document.getElementById("root")
);

