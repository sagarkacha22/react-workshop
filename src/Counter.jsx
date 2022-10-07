import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
