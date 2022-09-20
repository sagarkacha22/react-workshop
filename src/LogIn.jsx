import React, { useState } from "react";

function LogIn() {
  let [loginEmailValue, updateLoginEmailValue] = useState("");
  let [passwordValue, updatePasswordValue] = useState("");

  let logInForm = (event) => {
    event.preventDefault();
    loginEmailValue && passwordValue && alert("Logged in!");
    document.getElementsByClassName(
      "warning-loginEmail"
    )[0].style.display = loginEmailValue ? "none" : "block";
    document.getElementsByClassName(
      "warning-password"
    )[0].style.display = passwordValue ? "none" : "block";
  };

  return (
    <form id="login" noValidate>
      <div className="">
        <label className="form-label" style={{ marginRight: 15 }}>
          Email ID:
        </label>
        <input
          autoComplete="off"
          id="loginEmail"
          className="form-control"
          value={loginEmailValue}
          onChange={() =>
            updateLoginEmailValue(document.getElementById("loginEmail").value)
          }
          style={{ width: "50%", display: "inline-block" }}
        ></input>
        <p className="warning-loginEmail invalid-feedback">
          Please enter valid Email ID!
        </p>
      </div>
      <hr style={{}} />
      <div className="">
        <label className="form-label" style={{ marginRight: 15 }}>
          Password:
        </label>
        <input
          autoComplete="off"
          id="password"
          className="form-control"
          value={passwordValue}
          onChange={() =>
            updatePasswordValue(document.getElementById("password").value)
          }
          style={{ width: "40%", display: "inline-block" }}
        ></input>
        <p className="warning-password invalid-feedback">Incorrect Password!</p>
      </div>
      <hr style={{}} />
      <button
        className="btn btn-outline-primary"
        type="submit"
        onClick={logInForm}
      >
        Log In
      </button>
    </form>
  );
}

export default LogIn;
