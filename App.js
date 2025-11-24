import React, { useState } from "react";
import './App.css';
// import MiLista from './milista';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './Forms';

function App() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Pepe",
      apellido: "Pérez",
      correo: "pepeperez@gmail.com",
      telefono: "654958065"
    },
    {
      id: 2,
      nombre: "María",
      apellido: "Gómez",
      correo: "mariagomez@gmail.com",
      telefono: "684390605"
    }
  ]);

  const agregarUsuario = (nombre, apellido, correo, telefono) => {
    const nuevo = {
      id: usuarios.length + 1,
      nombre,
      apellido,
      correo,
      telefono
    };
    setUsuarios([...usuarios, nuevo]);
  };

  return (
    <>
      <Header />

      <div className="main">
        <div className="left">
          <Form agregarUsuario={agregarUsuario} />
        </div>

        <div className="right">
          <h2>Listado de usuarios:</h2>
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                Id: {u.id}
                <br />
                Nombre: {u.nombre}
                <br />
                Apellido: {u.apellido}
                <br />
                Correo: {u.correo}
                <br />
                Teléfono: {u.telefono}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
