import React from "react";
import { useState } from "react";
function Input(props) {
  let [value, setValue] = useState("SOME TEXT IN INPUT");
  return (
    <>
      <h1>{value}</h1>
      <input
        className="myInput"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
export default Input;
