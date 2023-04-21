const miFormulario = document.getElementById('miFormulario');
const datosDiv = document.getElementById('datos');

// Seleccionamos el campo del número de cuenta
const numCuentaInput = document.getElementById('numero');

// Agregamos un event listener para que se ejecute la función cuando se cambie el valor del input
numCuentaInput.addEventListener('input', validarNumCuenta);

// Definimos la función para validar el número de cuenta
function validarNumCuenta() {
  // Obtenemos el valor del input
  const numCuenta = numCuentaInput.value;
  
  // Verificamos si tiene 8 dígitos
  if(numCuenta.length === 8) {
    console.log('Número de cuenta válido');
  } else {
    console.log('El número de cuenta debe tener 8 dígitos');
  }
}

// Seleccionamos el campo del grado
const gradoInput = document.getElementById('grado');

// Agregamos un event listener para que se ejecute la función cuando se cambie el valor del input
gradoInput.addEventListener('input', validarGrado);

// Definimos la función para validar el grado
function validarGrado() {
  // Obtenemos el valor del input
  let grado = gradoInput.value;
  
  // Verificamos si el valor ingresado es un número del 1 al 8
  if(grado >= 1 && grado <= 8) {
    console.log('Grado válido');
  } else {
    // Si el valor ingresado no es válido, lo reemplazamos con un valor vacío
    grado = '';
    gradoInput.value = grado;
    console.log('El grado debe ser un número del 1 al 8');
  }
}

// Seleccionamos el campo del grupo
const grupoInput = document.getElementById('grupo');

// Agregamos un event listener para que se ejecute la función cuando se cambie el valor del input
grupoInput.addEventListener('input', validarGrupo);

// Definimos la función para validar el grupo
function validarGrupo() {
  // Obtenemos el valor del input
  let grupo = grupoInput.value;
  
  // Verificamos si el valor ingresado son letras en mayúsculas de la A a la K
  const letrasPermitidas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  if(letrasPermitidas.includes(grupo)) {
    console.log('Grupo válido');
  } else {
    // Si el valor ingresado no es válido, lo reemplazamos con un valor vacío
    grupo = '';
    grupoInput.value = grupo;
    console.log('El grupo debe ser una letra en mayúscula de la A a la K');
  }
}

miFormulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
  let asistencia = 1;

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const numero = document.getElementById('numero').value;
  const grado = document.getElementById('grado').value;
  const grupo = document.getElementById('grupo').value;
  
  datosDiv.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Apellido: ${apellido}</p>
    <p>Número de cuenta: ${numero}</p>
    <p>Grado: ${grado}</p>
    <p>Grupo: ${grupo}</p>
    <p>Asistencia: ${asistencia}</p>
  `;
});
