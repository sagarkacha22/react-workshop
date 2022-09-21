import Body from "./Body";
import Header from "./Header";
import React, { useState } from "react";
import Counter from "./Counter";
// import Counter from "./Counter";

function PropDrilling() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header>
        <h4>Header</h4>
        <Counter count={count} setCount={setCount} />
      </Header>
      <hr />
      <Body count={count} setCount={setCount} />
    </div>
  );
}

export default PropDrilling;
