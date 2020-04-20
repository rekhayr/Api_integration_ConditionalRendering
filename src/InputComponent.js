import React from "react";

const InputComponent = props => (
  <div>
    <label>{props.label}</label>
    <br />
    <input onChange={props.onChange} value={props.value} />
    <br />
  </div>
);
export default InputComponent;
