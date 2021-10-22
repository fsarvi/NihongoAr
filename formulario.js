/*Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro*/

const formulario = document.getElementsByClassName('formulario');
const entradas = document.querySelectorAll('.formulario input'); /*arreglo de todos los inputs*/

const expresiones = {
	Nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
	Nombre: false,
	Apellido: false,
	Correo: false,
	texto: false
}

const validarFormulario = () => {

	switch(e.target.name) {

		case "Nombre":
			if (expresiones.Nombre.test(e.target.value)){
				campos[Nombre]= true;
			} else {
				alert("No es nombre válido")
			}
		break;

		case "Apellido":
			if (expresiones.Apellido.test(e.target.value)){
				campos[Apellido]= true;
			} else {
				alert("No es apellido válido")
			}
		break;

		case "texto":
			if (texto.value === "") {
			    alert("Por favor, escribe tu correo electrónico");
			    texto.focus();
			} else {
				campos[texto]=true;
			}
			
		break;

		case "Correo":
			if (expresiones.Correo.test(e.target.value)){
				campos[Correo]= true;
			} else {
				alert("No es correo válido")
			}
		break;
	}
}

entradas.forEach ( (input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})
