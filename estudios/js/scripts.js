
// ### FUNCION PARA CAMBIAR LA IMAGEN DEL LOGO 

const logo = document.querySelector('.logo');
const navbarMenu = document.querySelector('nav');
const navbarStyle = window.getComputedStyle(navbarMenu);

// SELECCIONAR IMAGEN AL ABRIR LA PÁGINA

if (navbarStyle.backgroundColor === 'rgba(0, 0, 0, 0)'){
logo.src = '../assets/images/menu/nombre-blanco.png';
} else {
logo.src = '../assets/images/menu/nombre-azul.png';
}

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


// FUNCIÓN PERMITIR QUE UN SOLO CHECKBOX SEA ACTIVADO EN TIPO DE TITULACIÓN
function seleccionarCheckbox(event) {
  let checkboxes = document.querySelectorAll('.checkbox-titulación');

  checkboxes.forEach(function(checkbox) {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
  });
}

// FUNCIÓN ACTUALIZAR TITULO DE PÁGINA AL DAR CLICK EN UN CHECKBOX
function actualizarTitulo() {
  let checkboxes = document.querySelectorAll('.checkbox-titulación');
  let titulo = document.querySelector('.main-title');
  let nuevoTitulo = "";

  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let etiqueta = checkbox.parentNode;
    
    if (checkbox.checked) {
      nuevoTitulo += etiqueta.textContent.trim() + " ";
    }
  }

  if (nuevoTitulo === "") {
    nuevoTitulo = "Másteres Oficiales";
  }

  titulo.textContent = nuevoTitulo;
}

// LIMPIAR FILTROS AL DAR CLICK EN BOTON
const btnFiltro = document.querySelector(".btn-limpiar-filtro");

function clearFilter(){
  let checkboxes = document.querySelectorAll('.checkboxes');
  checkboxes.forEach((checkbox)=> {
    checkbox.checked = false;
    actualizarTitulo();
  })

}

btnFiltro.addEventListener("click", clearFilter)

//ANIMAR ICON + MENU FOOTER

const elementosH3 = document.querySelectorAll(".animate");

function alternarClase(event) {
  // Agregar o quitar la clase 'rotate' al elemento h3 clickeado
  event.currentTarget.classList.toggle("rotate");
}

elementosH3.forEach(elemento => {
  elemento.addEventListener("click", alternarClase);
});

// BORRAR CLASE COLLAPSE DE SUBMENU
function deleteCollapse(){

  const submenuList = document.querySelectorAll(".sub-footer-1-list");

submenuList.forEach(element => {
  if(window.innerWidth >= 1023){
    element.classList.remove("collapse")
  } else {
    element.classList.add("collapse")
  }
})
}

deleteCollapse();
window.addEventListener("resize", deleteCollapse);
