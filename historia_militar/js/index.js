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
