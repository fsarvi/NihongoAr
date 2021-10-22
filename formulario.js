document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

const expresiones = {
	texto: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function validarFormulario(e) {
	e.preventDefault();
	
	var nombre = document.getElementById('nombre').value;
	if(nombre.length == 0) {
   		alert('Complete este campo');
		document.getElementById('nombre').focus();
		return;
	  }
	
  	var apellido = document.getElementById('apellido').value;
  	if(apellido.length == 0) {
    		alert('Complete este campo');
		document.getElementById('apellido').focus();
   		return;
  	}
	
  	var texto = document.getElementById('texto').value;
  	if(texto.length == 0) {
    		alert('Complete este campo');
		document.getElementById('texto').focus();
    	return;
  	}
	
	this.submit();
}
