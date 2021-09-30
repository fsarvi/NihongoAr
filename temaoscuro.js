document.querySelector(".temaoscuro")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById('footer');
  var rojo = '#bd3133';
  var negro = '#535252';
    if (footer.style.backgroundColor === 'rojo'){
      console.log("negro");
      footer.style.backgroundColor= 'negro';
    }
    else {
      console.log("rojo");
      footer.style.backgroundColor= 'rojo';
    }
 }

/*document.querySelector(".temaoscuro")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById('footer');
    if (footer.style.backgroundColor === "#bd3133"){
      footer.style.backgroundColor = "#535252";
    }
    else{
      footer.style.backgroundColor = "#bd3133"
    }
    

  var header = document.getElementById('header');
    
    if (header.style.backgroundColor === "#bd3133"){
      header.style.backgroundColor = "#535252";
    }
    else{
      header.style.backgroundColor = "#bd3133"
    }
    
}

document.querySelector("#tema_oscuro_menu")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById('footer');
    if (footer.style.backgroundColor === "#bd3133"){
      footer.style.backgroundColor = "#535252";
    }
    else{
      footer.style.backgroundColor = "#bd3133"
    }
    

  var header = document.getElementById('header');
    if (header.style.backgroundColor === "#bd3133"){
      header.style.backgroundColor= "#535252";
    }
    else{
      header.style.backgroundColor= "#bd3133"
    }
    
}

*/
