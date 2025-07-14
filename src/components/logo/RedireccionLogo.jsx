"use client";

export default function Logo() {
  
  const outerStyle = {
    position: "absolute",
    top: "10vh",
    left: "-400px",
    width: "100vw",
    height: "auto",
    display: "grid",
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
    width: "300",
    height: "600",
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
