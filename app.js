
document.getElementById("formularioPacientes").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener valores del formulario
    const nombre = document.getElementById("firstName").value;
    const apellido = document.getElementById("lastName").value;
    const edad = document.getElementById("age").value;
    const sexo = document.getElementById("sexo").value;
    const tipoSangre = document.getElementById("bloodType").value;

    // Crear objeto paciente
    const paciente = {
        nombre,
        apellido,
        edad,
        sexo,
        tipoSangre
    };

    // Guardar en local storage
    const pacientesGuardados = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientesGuardados.push(paciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientesGuardados));

    // Limpiar formulario
    document.getElementById("formularioPacientes").reset();

    // Actualizar tabla
    mostrarPacientes();
});

// Función para mostrar pacientes en la tabla
function mostrarPacientes() {
    const pacientesGuardados = JSON.parse(localStorage.getItem("pacientes")) || [];
    const tabla = document.getElementById("BodyTablaPacientes");

    // Limpiar tabla
    tabla.innerHTML = "";

    // Llenar tabla con datos de pacientes
    pacientesGuardados.forEach((paciente, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${paciente.nombre}</td>
            <td>${paciente.apellido}</td>
            <td>${paciente.edad}</td>
            <td>${paciente.sexo}</td>
            <td>${paciente.tipoSangre}</td>
            <td>
    <button  onclick="eliminarPaciente(${index})">Eliminar</button>
</td>
<td>
<button onclick="editarPaciente(${index})">Editar</button>
</td>
                


        `;
        tabla.appendChild(fila);
    });
}
function eliminarPaciente(index) {
    const pacientesGuardados = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientesGuardados.splice(index, 1); // Elimina el paciente en la posición 'index'
    localStorage.setItem("pacientes", JSON.stringify(pacientesGuardados));
    mostrarPacientes(); // Actualiza la tabla
}
function cargarDatosPaciente(index) {
    const pacientesGuardados = JSON.parse(localStorage.getItem("pacientes")) || [];
    const paciente = pacientesGuardados[index];

    // Llenar los campos del formulario con los datos del paciente
    document.getElementById("firstName").value = paciente.nombre;
    document.getElementById("lastName").value = paciente.apellido;
    document.getElementById("age").value = paciente.edad;
    document.getElementById("sexo").value = paciente.sexo;
    document.getElementById("bloodType").value = paciente.tipoSangre;
}








