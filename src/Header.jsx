import Counter from "./Counter";
import React from "react";

function Header({ count, setCount }) {
  return (
    <>
      <h4>Header</h4>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default Header;
