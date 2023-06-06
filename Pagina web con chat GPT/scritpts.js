// Obtener referencia a los elementos del DOM
const form = document.querySelector('form');

// Agregar un event listener al formulario para manejar el envío
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar el formulario antes de enviar los datos
  if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }

  // Enviar los datos a través de una solicitud HTTP (puedes ajustar esto según tus necesidades)
  enviarDatos(nombre, email, mensaje);
});

// Función para enviar los datos del formulario
function enviarDatos(nombre, email, mensaje) {
  // Aquí puedes realizar la lógica de envío de datos, como enviar una solicitud AJAX o guardar en una base de datos

  // Ejemplo: Mostrar una alerta con los datos enviados
  alert(`Datos enviados:\n\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);

  // Restablecer el formulario después del envío
  form.reset();
}
