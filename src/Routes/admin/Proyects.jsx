import React, { useState, useEffect } from 'react';
import Inp from '../../components/Imput'
import ProyectData from '../../components/conteiners/proyects_data'

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  // Función para obtener todos los usuarios usando Fetch
  const obtenerProyectos = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/proyectos');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los proyectos');
      }
      const data = await respuesta.json();
      setProyectos(data.data);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Función para crear un nuevo usuario usando Fetch
  const crearProyectos = async () => {
    try {

      const tittle = document.getElementById('tittleProyect').value
      const desc = document.getElementById('descProyect').value
      const urlImg = document.getElementById('urlImgProyect').value

      const nuevoProyecto = {
        Tittle: tittle,
        Desc: desc,
        FtURL: urlImg
      };

      const respuesta = await fetch('http://localhost:5000/api/proyectos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProyecto),
      });

      if (!respuesta.ok) {
        throw new Error('Error al crear un proyecto');
      }

      obtenerProyectos(); // Volver a obtener los usuarios después de crear uno nuevo
    } catch (error) {
      console.error("Error al crear un proyecto:", error);
    }
  };

  return (
    <div>
      <h1 className='colorTittleProyects'>Lista de Proyectos</h1>
      <Inp type={'text'} cos={'InpClassic'} phr={'Titulo Del Proyecto'} ID={'tittleProyect'} />
      <Inp type={'text'} cos={'InpClassic'} phr={'Descripcion'} ID={'descProyect'} />
      <Inp type={'text'} cos={'InpClassic'} phr={'URl De La Img'} ID={'urlImgProyect'} />

      <button onClick={crearProyectos}>Crear Usuario</button>
      <ul>
        {proyectos.map(proyecto => (

          <div key={proyecto.Id} >
            <div className='target_proyect' >
              <h3>
              {proyecto.Tittle}
              </h3>
              <p>
                {proyecto.Desc}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
