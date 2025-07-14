"use client";
import { Allan } from "next/font/google";
import React, { useEffect, useState } from "react";

export default function Logo() {
  
  const outerStyle = {
    position: initConditional ? "absolute" : "relative",
    top: initConditional ? "40vh" : "10vh",
    left: expandirDiamante ? "-400px" : 0,
    width: "100vw",
    height: initConditional ? undefined : "auto",
    display: initConditional ? "grid" : "flex",
    transition: initConditional ? "top 1s ease-out" : undefined,
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s ease-in-out", // Animación suave
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const diamondStyle = {
    position: "absolute",
    top: 0,
    width: expandirDiamante ? "300px" : "50px",
    height: expandirDiamante ? "600px" : "100px",
    background: "radial-gradient(var(--specialColor), var(--specialColorLogo))",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    boxShadow: "1px 6px 12px #333",
    transition: "all 1s ease-in-out", // Animación suave
    zIndex: 1,
  };




  return (
    <div style={outerStyle}>
      <button style={buttonStyle}>
        
        <div style={diamondStyle}/>
        {mensaje && <div style={aiBoxStyle}>{mensaje}</div>}
      </button>
    </div>
  );
}
