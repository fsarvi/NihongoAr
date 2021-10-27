menu = document.querySelector(".menu_hamburguesa");
imagen = document.querySelector(".imagen_menu")

function menuHamburguesa(){
    alert("Click")
    menu.style.visibility= 'visible';
    const rutaImagen = imagen.getAttribute('src');

    if(rutaActual == 'imagenes/abrir.png'){
        imagen.setAttribute('src','imagenes/cerrar.jpg');
    }else{
        imagen.setAttribute('src','imagenes/abrir.png');
    }

}