import React, { useState, useEffect } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  // Función para obtener todos los usuarios usando Fetch
  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/usuarios');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await respuesta.json();
      setUsuarios(data.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  // Función para crear un nuevo usuario usando Fetch
  const crearUsuario = async () => {
    try {
      const nuevoUsuario = {
        nombre: 'Carlos',
        edad: 35,
        ciudad: 'Sevilla'
      };

      const respuesta = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!respuesta.ok) {
        throw new Error('Error al crear un usuario');
      }

      obtenerUsuarios(); // Volver a obtener los usuarios después de crear uno nuevo
    } catch (error) {
      console.error("Error al crear un usuario:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <button onClick={crearUsuario}>Crear Usuario</button>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nombre} - {usuario.edad} años - {usuario.ciudad}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
