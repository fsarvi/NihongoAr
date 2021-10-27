menu = document.querySelector(".menu_hamburguesa");
imagen = document.querySelector("#abrir_menu")

function menuHamburguesa(){
    menu.visibility = "visible";
    menu.classList.toggle('activo');
    menu.classList.toggle('opacity');
    
}