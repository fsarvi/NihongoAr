/*El evento «DOMContentLoaded» que hemos asociado al objeto document: sirve para detectar cuando el navegador ya ha procesado todos los elementos de la página, momento en el cual ya somos capaces de acceder al formulario con seguridad.
El evento «submit» que hemos asociado al formulario, que se dispara en el momento que el usuario envíe el formulario. Como manejador del evento submit hemos indicado el nombre de una función llamada «manejadorValidacion», cuyo código nos servirá para realizar las correspondientes validaciones.*/

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
	 } else if{
		 validarCampo(expresiones.usuario, e.target, 'usuario');
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
