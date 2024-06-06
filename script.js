let menuVisible = false;
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
    var rutaPdf = "CV_Madai_Monrroy.pdf";

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
    var slides = document.querySelectorAll(`#${carouselId} .slide`);
    var currentSlide = 0;
    

    // Muestra la primera diapositiva
    slides[currentSlide].style.display = "block";

    // Función para mostrar la siguiente diapositiva
    function nextSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }
    
    // Intervalo para cambiar automáticamente de diapositiva cada 5 segundos
    setInterval(nextSlide, interval);
  }

  // Inicializa todos los carruseles
  initCarousel("carousel1", 3000);
  initCarousel("carousel2", 7500);
  initCarousel("carousel3", 8500);
  initCarousel("carousel4", 6500);
  initCarousel("carousel5", 4200);
  initCarousel("carousel6", 7300);
});
