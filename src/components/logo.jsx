import React from "react";
import Logos from "../assets/Logo.svg";
import "../css/css-components/global_components.css";
import { Link } from "react-router-dom";
function Logo(props) {
  const logo ={
    txt:props.txt,
    lk:props.lk,
    cos:props.cos
  }
  return (
    <div>
      <Link to={logo.lk}>
        <img src={Logos} alt="Logo" className={logo.cos} />
      </Link>
    </div>
  );
}

export default Logo;
