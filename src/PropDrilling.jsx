import Body from "./Body";
import Header from "./Header";
import React, { useState } from "react";

function PropDrilling() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header count={count} setCount={setCount} />
      <hr />
      <Body count={count} setCount={setCount} />
    </div>
  );
}

export default PropDrilling;
