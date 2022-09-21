import Counter from "./Counter";
import React from "react";

function Header({ children }) {
//   console.log(children)
  return (
    <>
      {/* <h4>Header</h4> */}
      {children}
      {/* <Counter count={count} setCount={setCount} /> */}
    </>
  );
}

export default Header;
