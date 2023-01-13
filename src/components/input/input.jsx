import React, { useRef } from "react";
import { useState } from "react";
import "./input.css";
function Input(props) {
  let [value, setValue] = useState("SOME TEXT IN INPUT");
  function changeH1Value(e) {
    setValue(e.target.value);
  }
  const mainInputRef = useRef();
  return (
    <>
      <h1>{value}</h1>
      <input
      ref={mainInputRef}
        className="myInput"
        type="text"
        value={value}
        onChange={changeH1Value}
      />
    </>
  );
}
export default Input;
