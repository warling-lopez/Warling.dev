import React from "react";
import "./styleLogo.css";
function logo() {
  return (
    <div className="logo">
      <span className="w-5 h-5 relative top-0 right-[-30px] border-white border-2 bg-[var(--notify)]"></span>
      <div className="diamond-container shadow-2xs m-5"></div>
    </div>
  );
}

export default logo;
