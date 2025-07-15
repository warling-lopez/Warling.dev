"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function RedireccionLogo() {
  const router = useRouter();
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
    minHeight: "80px",
    background: "rgba(255,255,255,0)",
    border: "1px solid var(--specialColor)",
    borderRadius: "10px",
    fontSize: "1rem",
  };

  const direction = [
    {
      name: "Soy un Reclutador",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [1, 2, 3, 4],
      url: "/",
    },
    {
      name: "Soy un Desarrollador",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [2, 1, 3, 4],
      url: "/",
    },
    {
      name: "Busco un Freelancer",
      description:
        "Prefieres ver los proyectos y conocimientos antes que mis pensamientos u ideas a futuro",
      orden: [1, 2, 4, 3],
      url: "/",
    },
  ];



  return (
    <div id="logoContainer" style={outerStyle}>
      <button style={buttonStyle}>
        <div style={diamondStyle} />
        <div className="h-[600px] ml-10 mt-2 flex items-center">
          <div className="grid place-items-center relative h-full w-[400px] left-[50%]">
            
            {direction.map(({ name, description, orden }, index) => { //mapa para las opciones de redirección
              const isSecond = index === 1;
              return (
                <div key={index}>
                  <button
                    className={`${
                      isSecond ? "flex justify-start ml-[250px]" : ""
                    }`}
                    onClick={() => {
                      const ordenString = orden.join("");
                      router.push(`/test?orden=${ordenString}`); //manda una query string con el orden
                    }}
                  >
                    <div
                      style={aiBoxStyle}
                      className="flex items-center ml-[-150px] justify-center hover:scale-105 transition-transform duration-200 ease-in-out"
                    >
                      <h3 className="text-3xl text-center ">{name}</h3>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </button>
    </div>
  );
}
