"use client";
import { Allan } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./styleLogo.css"
const Logo = () => {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(true);
  const [initComplete, setInitComplete] = useState(false);
  const [initConditional, setInitConditional] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [expandirDiamante, setExpandirDiamante] = useState(false); // NUEVO

  useEffect(() => {
    sessionStorage.setItem("showNotification", showNotification);
  }, [showNotification]);
  useEffect(() => {
    sessionStorage.setItem("initConditional", initConditional);
  }, [initConditional]);
  useEffect(() => {
    sessionStorage.setItem("expandirDiamante", expandirDiamante);
  }, [expandirDiamante]);
  useEffect(() => {
    sessionStorage.setItem("initComplete", initComplete);
  }, [initComplete]);

  const eventos = [
    { tipo: "sistema", texto: "Cargando memoria..." },
    { tipo: "sistema", texto: "Analizando pixeles de la pantalla..." },
    { tipo: "sistema", texto: "Sistema iA cargado" },
    { tipo: "audio", audio: "/nuevo_audio.mp3" },
    { tipo: "ia", texto: "Hola, soy la IA de Warling." },
    { tipo: "ia", texto: "Estoy aquí para ayudarte." },
    { tipo: "ia", texto: "Puedes preguntarme sobre su trabajo" },
    { tipo: "ia", texto: "cambiar el diseño de esta página" },
    { tipo: "ia", texto: "o simplemente conocer su filosofía." },
    { tipo: "ia", texto: "Para empezar, ¿quién eres?" },
  ];

  useEffect(() => {
    const notify = sessionStorage.getItem("notifyAIWarling");
    if (notify === null) {
      sessionStorage.setItem("notifyAIWarling", "true");
      setShowNotification(true);
    } else {
      setShowNotification(notify === "true");
    }

    const init = sessionStorage.getItem("initComplete");
    if (init === "true") {
      setInitComplete(false);
    }
  }, []);
  //detiene el tiempo
  // ← se ejecuta cuando cambia miValor

  const ejecutarEventos = (indice) => {
    if (indice < eventos.length) {
      const evento = eventos[indice];

      if (evento.tipo === "audio" && evento.audio) {
        const audio = new Audio(evento.audio);

        audio.play().catch((e) => {
          console.warn("No se pudo reproducir el audio:", e);
        });

        setMensaje("");
        setTimeout(() => ejecutarEventos(indice + 1), 0);
        return;
      }

      setMensaje(evento.texto);
      if (indice === eventos.length - 1 || initConditional) {
        setShowAIResponse(true);
        setInitConditional(false);
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const iniciarSecuencia = async () => {
          console.log("Inicio");
          await sleep(5800); // espera 3 segundos
          console.log("Después de 3 segundos");
          setExpandirDiamante(true);
          await sleep(9000);
          router.push("/routes");
        };

        iniciarSecuencia(); // inicia la secuencia con espera
      }

      setTimeout(() => ejecutarEventos(indice + 1), 2000);
    }
  };

  const initAnimation = () => {
    sessionStorage.setItem("notifyAIWarling", "false");
    setShowNotification(false);
    setInitComplete(true);
    setInitConditional(true);
    setShowAIResponse(false);
    setExpandirDiamante(false); // Reinicia
    ejecutarEventos(0);
  };

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
    zIndex: 1,
  };

  const pulseStyle = {
    position: "relative",
    top: "-7px",
    left: "10px",
    width: "12px",
    height: "12px",
    display: "flex",
  };

  const aiBoxStyle = {
    color: "#fefefe",
    position: "absolute",
    top: "-60px",
    left: "30px",
    right: "auto",
    minWidth: "250px",
    width: "auto",
    padding: "15px 17px",
    background: "rgba(255,255,255,0)",
    border: "1px solid var(--specialColor)",
    borderRadius: "10px",
    fontSize: "1rem",
    lineHeight: 1.2,
    opacity: 1,
    transition: "opacity 0.5s ease-in",
    zIndex: 10,
  };

  return (
    <div style={outerStyle}>
      <button onClick={initAnimation} style={buttonStyle}>
        {showNotification && (
          <span style={pulseStyle}>
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ping 1s infinite",
                background: "rgba(220, 38, 38, 0.75)",
              }}
            />
            <span
              style={{
                position: "relative",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "rgb(185, 28, 28)",
              }}
            />
          </span>
        )}

        <div
          style={diamondStyle}
          className={initComplete ? "animationVoice" : ""}
        />
        {mensaje && <div style={aiBoxStyle}>{mensaje}</div>}
      </button>
    </div>
  );
};
export default Logo;
