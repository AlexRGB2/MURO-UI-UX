
console.log("Script cargado");

document.addEventListener('DOMContentLoaded', function () {
  var inputField = document.querySelector('.box input');

  inputField.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
      redirectToPage();
      // Limpiar el valor del input después de presionar Enter
      inputField.value = "";
    }
  });
});

function redirectToPage() {
  console.log("Función redirectToPage llamada");

  var userInput = document.querySelector('.box input').value.toLowerCase();

  console.log("Valor del campo de entrada:", userInput);

  if (userInput.includes('capacitaciones') || userInput.includes('capacitacion') || userInput.includes('cursos') || userInput.includes('curso') || userInput.includes('course') || userInput.includes('courses')) {
    console.log("Redirigiendo a courses.html");
    window.location.href = 'courses.html';
  } else if (userInput.includes('desarrollo movil') || userInput.includes('marketing digital') || userInput.includes('copywriting') ||
    userInput.includes('marketing') || userInput.includes('redaccion')) {
    console.log("Redirigiendo a courses.html");
    window.location.href = 'courses.html#fila1';
  } else if (userInput.includes('administracion de empresas') || userInput.includes('auditoria de sistemas') || userInput.includes('defensa fiscal y administrativa') ||
    userInput.includes('defensa fiscal')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'courses.html#fila2';
  } else if (userInput.includes('contabilidad en excel') || userInput.includes('contabilidad') || userInput.includes('optimización de motores de búsqueda') ||
    userInput.includes('optimización de motores') || userInput.includes('optimizacion de motores') || userInput.includes('optimizacion de motores de busqueda') ||
    userInput.includes('search engine optimization') || userInput.includes('search engine')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'courses.html#fila3';
  } else if (userInput.includes('desarrollo web') || userInput.includes('desarrollo') || userInput.includes('web')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'courses.html#fila4';
  } else if (userInput.includes('redes') || userInput.includes('instagram') || userInput.includes('facebook') ||
    userInput.includes('twitter') || userInput.includes('face') || userInput.includes('ig') ||
    userInput.includes('footer') || userInput.includes('linkedin') || userInput.includes('instructores')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'index.html#footer';
  } else if (userInput.includes('noticia') || userInput.includes('noticias') || userInput.includes('news')) {
    console.log("Redirigiendo a noticias.html");
    window.location.href = 'noticias.html';
  } else if (userInput.includes('firma de convenio') || userInput.includes('aguilas con corazon') || userInput.includes('águilas con corazón') ||
    userInput.includes('rally')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'noticias.html#portada';
  } else if (userInput.includes('foro') || userInput.includes('cambio climático') || userInput.includes('cambio climatico') ||
    userInput.includes('juventud resiliente') || userInput.includes('selectivo de ajedrez') || userInput.includes('ajedrez') ||
    userInput.includes('mivozenlacop')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'noticias.html#noticias1';
  } else if (userInput.includes('proceso de evaluación') || userInput.includes('proceso de evaluacion')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'noticias.html#noticias2';
  } else if (userInput.includes('direccion') || userInput.includes('direcciones') || userInput.includes('directorio') ||
    userInput.includes('address') || userInput.includes('addresses') || userInput.includes('directory')) {
    console.log("Redirigiendo a directorio.html");
    window.location.href = 'directorio.html';
  } else if (userInput.includes('beca') || userInput.includes('becas') || userInput.includes('apoyo') ||
    userInput.includes('apoyos') || userInput.includes('scholarship') || userInput.includes('scholarships') ||
    userInput.includes('support') || userInput.includes('supports')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'becas.html';
  } else if (userInput.includes('jovenes escribiendo el futuro') || userInput.includes('jovenes escribiendo') || userInput.includes('jovenes el futuro') ||
    userInput.includes('young people writing the future') || userInput.includes('young people writing') || userInput.includes('young people the future') ||
    userInput.includes('escribiendo el futuro') || userInput.includes('writing the future') || userInput.includes('elisa acuña') || userInput.includes('elisa') ||
    userInput.includes('acuña') || userInput.includes('chavos que inspiran') || userInput.includes('kids who inspire') || userInput.includes('chavos inspiran') ||
    userInput.includes('kids inspire') || userInput.includes('inspiran') || userInput.includes('inspire') || userInput.includes('internal supports') || userInput.includes('apoyos internos')) {
    console.log("Redirigiendo a becas.html");
    window.location.href = 'becas.html#becas';
  } else {
    Swal.fire({
      icon: 'error',
      title: '¡Búsqueda no encontrada!',
      text: 'Intenta con otras palabras clave.',
      timer: 2500,
      timerProgressBar: true,
      toast: true,
      position: 'top',
      showConfirmButton: false
    });
  }
}
