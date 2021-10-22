function () {
	
	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("formulario").addEventListener('submit', validarFormulario); 
	  });


	  function validarFormulario(e) {
		e.preventDefault();


		var nombre = document.getElementById("#nombre").value;
		var apellido= document.getElementById("#apellido").value;
		var opcion= document.getElementById("#opcion").value;
		var texto= document.getElementById("#texto").value;
		if(nombre.length == 0 || apellido.length==0 || opcion.length==0 || texto.length==0) {
		
			alert("Completa todos los campos antes de enviar");
		  return ;
		}

		this.submit();
	}

}
