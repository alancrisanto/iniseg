
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

// ##### FOOTER #######
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

// ##### FIN FOOTER #######