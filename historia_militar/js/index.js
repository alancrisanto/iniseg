// ### FUNCION PARA CAMBIAR LA IMAGEN DEL LOGO 

const logo = document.querySelector('.logo');
const navbarMenu = document.querySelector('nav');
const navbarStyle = window.getComputedStyle(navbarMenu);
// CAMBIAR LA IMAGEN UNA VEZ CARGADA LA PÁGINA DE ACUERDO AL BACKGROUND-COLOR
let images = [
  '../assets/images/menu/logo-blanco.png',
  '../assets/images/menu/nombre-blanco.png',
];

let imagesBlue = [
  '../assets/images/menu/logo-azul.png',
  '../assets/images/menu/nombre-azul.png',
]
let currentImageIndex = 0;

// FUNCIÓN CAMBIAR LA IMAGEN CADA 3.5 SEGUNDOS
function changeLogo() {
  logo.classList.add('hidden');
  setTimeout(function() {
    if (navbarStyle.backgroundColor === 'rgba(0, 0, 0, 0)'){
      logo.src = images[currentImageIndex];
    } else {
      logo.src = imagesBlue[currentImageIndex];
    }
    logo.classList.remove('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 1000);
}

setInterval(changeLogo, 3000);


// ### FIN FUNCION PARA CAMBIAR LA IMAGEN DEL LOGO 

// #### SWIPER
const swiper = new Swiper('.swiper-news', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
  autoplay: {
    delay: 3500,
  },
  clickable: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
);

/* ### FIN SWIPER */

// Animar texto al hacer scroll

document.addEventListener('DOMContentLoaded', function() {

  const container5 = document.querySelector('.container-5-text');

  function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      rect.top >= 200 && // Aumento de 50px para mostrar antes
      rect.bottom <= (windowHeight + 100)
    );
  }

  function handleScroll() {
    if (isElementInViewport(container5)) {
      container5.classList.add('animated');
      // Si quieres que la animación solo se active una vez, descomenta la siguiente línea:
      // window.removeEventListener('scroll', handleScroll);
    } else{
      container5.classList.remove('animated')
    }
  }

  window.addEventListener('scroll', handleScroll);
});
