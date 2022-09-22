import React, { useState } from "react";

function SignUp() {
  let [name, updateName] = useState("");
  let [emailValue, updateEmailValue] = useState("");
  let [locationValue, locationChange] = useState("");
  let [age, updateAge] = useState(0);

  let submitForm = (event) => {
    event.preventDefault();
    let isValidName = name ? true : false;
    let isValidEmail = emailValue ? true : false;
    let isValidAge = /^\d+$/.test(age) && age > 18 ? true : false;
    let isGenderSelected =
      document.querySelectorAll("[name=gender]:checked").length > 0
        ? true
        : false;
    let isValidLocation = locationValue ? true : false;
    let isTermsChecked = document.getElementById("terms").checked
      ? true
      : false;
    isValidName &&
      isValidEmail &&
      isValidAge &&
      isGenderSelected &&
      isValidLocation &&
      isTermsChecked &&
      alert("you are good to go!");
    document.getElementsByClassName(
      "warning-name"
    )[0].style.display = isValidName ? "none" : "block";
    document.getElementsByClassName(
      "warning-email"
    )[0].style.display = isValidEmail ? "none" : "block";
    document.getElementsByClassName("warning-age")[0].style.display = isValidAge
      ? "none"
      : "block";
    document.getElementsByClassName(
      "warning-gender"
    )[0].style.display = isGenderSelected ? "none" : "block";
    document.getElementsByClassName(
      "warning-location"
    )[0].style.display = isValidLocation ? "none" : "block";
    document.getElementsByClassName(
      "warning-terms"
    )[0].style.display = isTermsChecked ? "none" : "block";
  };

  let clearForm = (event) => {
    event.preventDefault();
    updateName("");
    updateEmailValue("");
    updateAge("");
    if (document.querySelectorAll("[name=gender]:checked").length > 0) {
      document.querySelectorAll("[name=gender]:checked")[0].checked = false;
    }
    locationChange("");
    document.getElementById("terms").checked = false;
    Array.from(
      document
        .getElementById("signup")
        .getElementsByClassName("invalid-feedback")
    ).forEach((element) => {
      element.style.display = "none";
    });
  };

  return (
    <form id="signup" noValidate>
      <div className="">
        <label className="form-label">
          Name:
        </label>
        <input
          autoComplete="off"
          id="name"
          className="form-control"
          value={name}
          onChange={() => updateName(document.getElementById("name").value)}
          style={{ width: "40%", display: "inline-block" }}
        ></input>
        <p className="warning-name invalid-feedback">Please enter your Name!</p>
      </div>
      <hr />
      <div className="">
        <label className="form-label">
          Email ID:
        </label>
        <input
          autoComplete="off"
          id="email"
          className="form-control"
          value={emailValue}
          onChange={() =>
            updateEmailValue(document.getElementById("email").value)
          }
          style={{ width: "50%", display: "inline-block" }}
        ></input>
        <p className="warning-email invalid-feedback">
          Please enter valid Email ID!
        </p>
      </div>
      <hr />
      <div className="">
        <label className="form-label">
          Age:
        </label>
        <input
          autoComplete="off"
          id="age"
          value={age}
          onChange={() => updateAge(document.getElementById("age").value)}
          className="form-control"
          style={{ width: "10%", display: "inline-block" }}
        ></input>
        <p className="warning-age invalid-feedback">You must be above 18!</p>
      </div>
      <hr />
      <div className="">
        <label className="form-label">
          Gender:
        </label>
        <label className="form-check-label">
        <input
          name="gender"
          value="male"
          className="form-check-input me-2"
          type="radio"
        ></input>
          Male
        </label>
        <label className="form-check-label">
        <input
          name="gender"
          value="female"
          className="form-check-input me-2"
          type="radio"
        ></input>
          Female
        </label>
        <label className="form-check-label">
        <input
          name="gender"
          value="na"
          className="form-check-input me-2"
          type="radio"
        ></input>
          Why do you care!
        </label>
        <p className="warning-gender invalid-feedback">Please choose Gender!</p>
      </div>
      <hr />
      <div className="">
        <select
          id="location"
          className="form-select"
          style={{ width: "50%" }}
          value={locationValue}
          onChange={() =>
            locationChange(document.getElementById("location").value)
          }
        >
          <option disabled value="">
            Where are you from?
          </option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="pakistan">Pakistan</option>
          <option value="canada">Canada</option>
          <option value="europe">Somewhere in Europe</option>
          <option value="mars">I'm from Mars</option>
        </select>
        <p className="warning-location invalid-feedback">
          Please select your Location!
        </p>
      </div>
      <hr />
      <div className="">
        <input
          id="terms"
          className="form-check-input me-2"
          type="checkbox"
        ></input>
        <label className="form-check-label" htmlFor="terms">
          Tick this to go ahead! <b>*</b>
        </label>
        <p className="warning-terms invalid-feedback">
          Please agree to Terms & Conditions!
        </p>
      </div>
      <hr />
      <button
        className="btn btn-outline-primary me-3"
        type="submit"
        onClick={submitForm}
      >
        Submit
      </button>
      <button className="btn btn-outline-primary" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}

export default SignUp;
