import React from "react";

function input(props) {
  const { children, type, onChange, placeholder } = props;
  return (
    <label className="input">
      <b>{children}</b>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </label>
  );
}

export default input;
