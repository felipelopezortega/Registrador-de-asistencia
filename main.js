// Seleccionamos el campo del número de cuenta
const numCuentaInput = document.getElementById('num_cuenta');

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
