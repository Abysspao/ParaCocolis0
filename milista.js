import milista from './milista.js';
import React from "react";

class MiLista extends React.Component {
  incidencias = [
    "Proyector averiado en aula 2",
    "Ordenador de secretaría no enciende",
    "Impresora sin conexión",
    "Wifi no disponible",
    "Pantalla táctil no responde",
    "Ratón y teclado dañados",
    "Altavoces sin sonido",
    "Servidor se reinicia",
    "Cable HDMI roto",
    "Software educativo no abre"
  ]

  render() {
    return (
      <div>
        <ul>
          {this.incidencias.map((i) => (<li>{i}</li>))}
        </ul>
      </div>
    );
  }
}

export default MiLista;