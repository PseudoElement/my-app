import React, { useRef } from "react";
import { useState } from "react";
import "./input.css";
function Input(props) {
  let [value, setValue] = useState("");
  const mainInputRef = useRef();
  return (
    <>
      <input
        style={{ maxWidth: 300 }}
        ref={mainInputRef}
        className="myInput"
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
export default Input;
