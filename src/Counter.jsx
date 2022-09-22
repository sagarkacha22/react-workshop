import React, { useContext } from "react";
import CounterContext from "./contexts";
// import { useState } from "react";

export default function Counter() {
  //   let [count, updateCount] = useState(0);

  let [count, setCount] = useContext(CounterContext);

  return (
    <div>
      <button
        className="btn btn-primary m-3"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <button className="btn btn-primary m-3" onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}
