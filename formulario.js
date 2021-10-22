document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

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
