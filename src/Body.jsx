import Counter from "./Counter";
import React from "react";

function Body({ count, setCount }) {
  return (
    <>
      <h4>Body</h4>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default Body;
