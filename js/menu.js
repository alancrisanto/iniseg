// PAGE LOADER

window.onload = function(){
  var contCarga = document.getElementById('contenedor_carga');

  contCarga.style.visibility = 'hidden';
  contCarga.style.opacity = '0';

}

// STICKY NAVBAR
window.onscroll = function() {
myFunction()
};

let navbar = document.querySelector('.navbar');
let navMenuShow = document.querySelector('.nav-menu')
let sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
navMenuShow.classList.add('nav-menu-sticky')
} else {
navbar.classList.remove("sticky");
navMenuShow.classList.remove('nav-menu-sticky')
}
}
// FUNCIONES PARA BOTONES MENU RESPONSIVE
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const toggleNavbar = document.querySelector('.toggle-navbar');
const navMenu = document.querySelector('.nav-menu');

dropdownMenus.forEach(function(dropdownMenu) {
dropdownMenu.previousElementSibling.addEventListener('click', function () {
if(window.innerWidth < 994) {
  dropdownMenu.classList.add('show');
  toggleNavbar.classList.add('hide');
}
});

const dropdownClose = dropdownMenu.querySelector('.dropdown-close');
dropdownClose.addEventListener('click', function () {
if(window.innerWidth < 994) {
  dropdownMenu.classList.remove('show');
  toggleNavbar.classList.remove('hide');
}
});
});

// FUNCIÓN BOTÓN HAMBURGUESA / CLOSE  --MENÚ
toggleNavbar.addEventListener('click', function () {
if(window.innerWidth < 994) {
navMenu.classList.toggle('show');

if(navMenu.classList.contains('show')) {
  this.classList.replace('bi-list', 'bi-x-circle-fill');
} else {
  this.classList.replace('bi-x-circle-fill', 'bi-list');
}
}
})
