import React from "react";
import "./button.css";

function Button(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  );
}

export default Button;
