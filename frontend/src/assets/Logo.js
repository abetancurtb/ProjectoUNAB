import React from "react";

import "./Logo.css";

// @ts-ignore
import logo from "./enviar.png";

function Logo(props) {
  const { size, showText = true } = props;

  const style = {
    width: size,
    height: size,
  };

  return (
    <div className=" logo">
      <img src={logo} style={style}></img>
      {showText ? <a>Do-ItApp</a> : null}
    </div>
  );
}

export default Logo;
