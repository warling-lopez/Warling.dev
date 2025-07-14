"use client";

export default function RedireccionLogo() {
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
    top: "10px",
    width: "300px",
    height: "600px",
    background: "radial-gradient(var(--specialColor), var(--specialColorLogo))",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    boxShadow: "1px 6px 12px #333",
    transition: "all 1s ease-in-out", // Animación suave
    zIndex: 1,
  };
  const aiBoxStyle = {
    color: "#fefefe",
    minWidth: "400px",
    maxHeight: "80px",
    background: "rgba(255,255,255,0)",
    border: "1px solid var(--specialColor)",
    borderRadius: "10px",
    fontSize: "1rem",
  };

  const direction = [
    {
      name: "Soy reclutador",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [1, 2, 3, 4],
    },
    {
      name: "Soy reclutador",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [1, 2, 3, 4],
    },
    {
      name: "Soy reclutador",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [1, 2, 3, 4],
    },
  ];

  return (
    <div style={outerStyle}>
      <button style={buttonStyle}>
        <div style={diamondStyle} />
        <div className="grid align-center h-[75vh] gap-5 mt-5 w-full">
          <div>
            {direction.map(({ name, description, orden }, index) => {
              return (
                <div
                  key={index}
                  style={aiBoxStyle}
                  className="flex items-center justify-center"
                >
                  <h3 className="text-3xl text-center ">{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </button>
    </div>
  );
}
