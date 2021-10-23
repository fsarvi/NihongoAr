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
	/*En el objeto evento disponemos del método preventDefault() que realiza la parada del comportamiento predeterminado del evento correspondiente, en este caso el envío del formulario.*/
	e.preventDefault();
	
	var nombre = document.getElementById('nombre').value;
	if(nombre.length == 0) {
   		alert('Complete este campo');
		document.getElementById('nombre').focus();
		return;
	 }
	if(expresiones.nombre.test(e.target.value)){
		alert(expresiones.nombre.test(e.target.value))
	} else {
		alert("Datos no válidos");
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
	alert("Mensaje enviado correctamente")
	this.submit();
}
