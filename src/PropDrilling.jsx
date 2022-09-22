import Body from "./Body";
import Header from "./Header";
import React, { useState } from "react";
// import Counter from "./Counter";
import CounterContext from "./contexts";

function PropDrilling() {
  let [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      <div className="container">
        <Header />
        <hr />
        <Body />
      </div>
    </CounterContext.Provider>
  );
}

export default PropDrilling;
