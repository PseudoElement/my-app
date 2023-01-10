import React from "react";
import { useState } from "react";
function Counter(){
  let [count, setCount] = useState(0);
  function increment() {
    setCount(++count);
  }
  function decrement() {
    setCount(--count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default Counter;
