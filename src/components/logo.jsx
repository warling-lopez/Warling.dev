import React from "react";
import Logos from "../assets/Logo.svg";
import "../css/css-components/logo.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div w>
      <Link to={'/'}>
        <img src={Logos} alt="Logo" id="logo-img" />
      </Link>
    </div>
  );
}

export default Logo;
