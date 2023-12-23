// Elementos del DOM
const header = document.getElementById("header")
const btnNav = document.getElementById("btn-nav")
const navBar = document.getElementById("nav-bar")
// Variables

// Funciones
// Función para mostrar u ocultar elementos dependiendo del tamaño de la pantalla
function toggleElements() {
    if (window.innerWidth >= 576) {
        btnNav.style.display = "none";
        navBar.style.display = "flex";
        navBar.style.flexDirection = "row";
    } else {
        btnNav.style.display = "flex";
        navBar.style.display = "none";
    }
}

// Llamar a la función inicialmente para configurar los elementos en función del tamaño inicial de la pantalla
toggleElements();

// Agregar un event listener para el cambio de tamaño de la ventana
window.addEventListener("resize", function() {
    // Volver a verificar y mostrar u ocultar elementos al cambiar el tamaño de la ventana
    toggleElements();
});

// Eventos
btnNav.addEventListener("click", function(event){
    event.preventDefault()
    header.style.height = "11em"
    header.style.backgroundColor = "rgb(25, 141, 135)"
    header.style.transition = "all 0.5s"
    btnNav.style.display = "none"
    navBar.style.display = "flex"
    navBar.style.flexDirection = "column"

})
header.addEventListener("click", function(event){
    if (event.target !== btnNav){
        event.preventDefault()
        header.style.height = "4em"
        header.style.backgroundColor = "lightseagreen"
        header.style.transition = "all 0.5s"
        btnNav.style.display = "flex"
        navBar.style.display = "none"
    }
    

})
