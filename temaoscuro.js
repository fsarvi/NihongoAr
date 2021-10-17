function temaOscuro(){
  var fondo = document.querySelector(".footer").style.backgroundColor;
  alert(fondo);
  if (fondo === rgb(189, 49, 51)){
    console.log("negro");
    document.querySelector(".footer").style.backgroundColor = '#535252';
  }
  else {
    console.log("rojo");
    document.querySelector(".footer").style.backgroundColor = '#bd3133';
  }
}

/*document.querySelector(".temaoscuro")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {
  const rojo = '#bd3133';
  const oscuro = '#535252';
  
  var footer = document.getElementById('footer');
  
    if (footer.style.backgroundColor === '#bd3133'){
      console.log("negro");
      footer.style.backgroundColor = '#535252';
    }
    else {
      console.log("rojo");
      footer.style.backgroundColor = '#bd3133';
    }

}
*/
