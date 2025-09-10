import React, { useState, useEffect } from 'react';

// Componente del Spinner para la carga (usando Tailwind CSS)
const Spinner = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="w-12 h-12 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    <p className="mt-4 text-gray-600">Cargando...</p>
  </div>
);

const PopupComponent = () => {
  // Estado para controlar la visibilidad del popup
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar la fase de carga
  const [isLoading, setIsLoading] = useState(true);

  // Función para abrir el popup y reiniciar el estado de carga
  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true); // Siempre que se abre, empieza cargando
  };

  // Función para cerrar el popup
  const handleClose = () => {
    setIsOpen(false);
  };

  // useEffect para manejar el temporizador de 5 segundos
  useEffect(() => {
    let timer;
    // Si el popup está abierto, iniciamos el temporizador
    if (isOpen) {
      timer = setTimeout(() => {
        setIsLoading(false); // Después de 5 segundos, desactivamos la carga
      }, 5000);
    }

    // Función de limpieza: se ejecuta si el popup se cierra antes de los 5s
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]); // Este efecto se ejecuta cada vez que 'isOpen' cambia

  return (
    <>
      {/* --- BOTÓN DE ACTIVACIÓN --- */}
      <div className="flex items-center justify-center p-8">
        <button
          onClick={handleOpen}
          className="px-6 py-3 font-bold text-white transition-transform transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 active:scale-95"
        >
          Ver ejemplo
        </button>
      </div>

      {/* --- POPUP / MODAL --- */}
      {/* Se renderiza solo si 'isOpen' es true */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={handleClose} // Cierra el popup al hacer clic en el fondo
        >
          {/* Contenedor principal del contenido del popup */}
          <div
            className="relative w-11/12 max-w-4xl p-6 bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del popup lo cierre
          >
            {/* Botón para cerrar el popup */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Grid responsivo para el contenido */}
            <div className="grid grid-cols-1 gap-4 mx-5  text-center md:grid-cols-3 md:text-left">
              
              {/* 1. Lado Izquierdo: Imagen Inicial */}
              <div className="flex items-center justify-center">
                <img
                  src="https://scontent.fjbq1-1.fna.fbcdn.net/v/t45.5328-4/542396160_788147523756858_5762516516922421366_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=MJ6JL-iDSgYQ7kNvwHjzQeF&_nc_oc=AdlDvPH-LBwlFU8wG46eGGcSm2XxdDlQPYd_reDaW6yufLImrdxhNhunDyl6yZXRHxg&_nc_zt=23&_nc_ht=scontent.fjbq1-1.fna&_nc_gid=5Q_3OO25qsmO7q3gaU-bew&oh=00_AfbKF-Y6SzTyX1C_DnQnqJtADQag2kQQzzYbSNCB-U9Xdw&oe=68C41E2F"
                  alt="Imagen izquierda"
                  className="object-cover w-full h-auto max-h-96 rounded-lg shadow-md"
                />
              </div>

              {/* 2. Centro: Carga de 5 segundos */}
              <div className="flex items-center justify-center min-h-[150px] md:min-h-full">
                {isLoading && <Spinner />}
                {!isLoading && <h2 className='text-black text-xl text-center'>Carga real de la aplicación!!</h2>}
              </div>

              {/* 3. Lado Derecho: Imagen que aparece después de la carga */}
              <div className={`flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <img
                  src="/Gemini_Generated_Image_6frmf46frmf46frm.png"
                  alt="Imagen derecha"
                  className="object-cover w-full h-86 max-h-96 rounded-lg shadow-md"
                />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupComponent;


