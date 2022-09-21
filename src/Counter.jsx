import React, { useState } from "react";

export default function Counter({count, setCount}) {
//   let [count, updateCount] = useState(0);

  return (
    <div>
      <button className="btn btn-primary me-3 mb-3" onClick={() => setCount(count + 1)}>{count}</button>
      <button className="btn btn-primary me-3 mb-3" onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
