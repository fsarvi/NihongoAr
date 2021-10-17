function temaOscuro(){
  var footer = document.querySelector(".footer").style.backgroundColor;

  if (footer === "rgb(189, 49, 51)"){

    document.querySelector(".footer").style.backgroundColor = '#535252';
  }
  else {
 
    document.querySelector(".footer").style.backgroundColor = '#bd3133';
  }
  
  var header = document.querySelector("#header").style.backgroundColor;

  if (header === "rgb(189, 49, 51)"){

    document.querySelector("#header").style.backgroundColor = '#535252';
  }
  else {

    document.querySelector("#header").style.backgroundColor = '#bd3133';
  }
  
}
