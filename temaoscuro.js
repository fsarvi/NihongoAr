document.querySelector(".temaoscuro")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById("footer");
  
    if (footer.style.background-color = "red"){
      console.log("rojo");
      footer.style.backgroundColor= "#535252";
    } else {
      console.log("negro");
      footer.style.backgroundColor= "#bd3133";
    }
 }
/*document.querySelector(".temaoscuro")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById("footer");
    if (footer.style.backgroundColor == "#bd3133"){
      footer.style.backgroundColor= "#535252";
    } else{
      footer.style.backgroundColor= "#bd3133"
    }
    

  var header = document.getElementById("header");
    
    if (header.style.backgroundColor== "#bd3133"){
      header.style.backgroundColor= "#535252";
    } else{
      header.style.backgroundColor= "#bd3133"
    }
    
}

document.querySelector("#tema_oscuro_menu")
  .addEventListener("click", cambiar_tema);

function cambiar_tema() {

  var footer = document.getElementById("footer");
    if (footer.style.backgroundColor ="#bd3133"){
      footer.style.backgroundColor= "#535252";
    } else if (footer.style.backgroundColor= "#535252"){
      footer.style.backgroundColor= "#bd3133"
    }
    

  var header = document.getElementById("header");
    if (header.style.backgroundColor= "#bd3133"){
      header.style.backgroundColor= "#535252";
    } else if (header.style.backgroundColor= "#535252"){
      header.style.backgroundColor= "#bd3133"
    }
    
}
*/
