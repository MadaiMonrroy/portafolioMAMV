let menuVisible = false;
emailjs.init('OmqhgHqM1BaE513Em'); // Reemplaza con tu Public Key

//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

document.addEventListener("DOMContentLoaded", function () {
  var descargarBtn = document.getElementById("descargarCvBtn");

  descargarBtn.addEventListener("click", function () {
    // Ruta del archivo PDF
    var rutaPdf = "CV_MAMV_TECH.pdf";

    // Realizar la descarga
    descargarPDF(rutaPdf);
  });

  function descargarPDF(ruta) {
    fetch(ruta)
      .then((response) => response.blob())
      .then((blob) => {
        // Crear un objeto Blob con el contenido del PDF
        var blobURL = URL.createObjectURL(blob);

        // Crear un enlace de descarga
        var link = document.createElement("a");
        link.href = blobURL;
        link.download = "CV_Madai_Monrroy.pdf";

        // Agregar el enlace al cuerpo del documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para activar la descarga
        link.click();

        // Limpiar después de la descarga
        document.body.removeChild(link);
        URL.revokeObjectURL(blobURL);
      })
      .catch((error) => console.error("Error al descargar el archivo:", error));
  }
  // Función para inicializar un carrusel
  function initCarousel(carouselId, interval) {
    var slides = document.querySelectorAll(`.${carouselId} .slide`);
    var currentSlide = 0;
    
    // Muestra la primera diapositiva
    slides[currentSlide].style.display = "block";

    // Función para mostrar la siguiente diapositiva
    function nextSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }
    
    // Intervalo para cambiar automáticamente de diapositiva cada 'interval' milisegundos
    setInterval(nextSlide, interval);
  }

  // Inicializa todos los carruseles
  initCarousel("carousel1", 3000);
  initCarousel("carousel2", 2000);
  initCarousel("carousel3", 3500);
  initCarousel("carousel4", 3500);
  initCarousel("carousel5", 3200);
  initCarousel("carousel6", 3300);
  initCarousel("carousel7", 7300);
  initCarousel("carousel8", 7300);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  // Captura los datos del formulario
  const templateParams = {
      from_name: event.target.from_name.value,
      email: event.target.email.value,
      subject: this.subject.value,  // Campo Asunto

      message: event.target.message.value,
  };

  // Envía el correo
  emailjs.send('service_alghidh', 'template_dwrfcfc', templateParams)
      .then(function(response) {
          alert('Mensaje enviado con éxito.');
          // Limpiar los campos del formulario
          document.getElementById('contact-form').reset(); // Esto vacía los campos

      }, function(error) {
          alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
});
