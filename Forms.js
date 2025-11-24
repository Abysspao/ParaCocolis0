import React from "react";

function Form(props) {
    const envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;
        if (props.agregarUsuario) {
            props.agregarUsuario(
                form.nombre.value,
                form.apellido.value,
                form.correo.value,
                form.telefono.value
            );
        }
    }

    return (
        <div>
            <form onSubmit={envioFormulario}>
                <label>Nombre:</label>
                <input type="text" name="nombre" placeholder="Introduce el nombre" required />
                <br /><br />

                <label>Apellido:</label>
                <input type="text" name="apellido" placeholder="Introduce el apellido" required />
                <br /><br />

                <label>Correo:</label>
                <input type="email" name="correo" placeholder="ej: juan@gmail.com" required />
                <br /><br />

                <label>Teléfono:</label>
                <input type="tel" name="telefono" placeholder="ej: 684890233" required />
                <br /><br />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;