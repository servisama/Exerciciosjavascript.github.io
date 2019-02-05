/* 
	Código en JavaScript
	Nome do ficheiro: ex6.js
	Usados os eventos: onclick, onload, onmouseover
*/

/*	
	Definimos funcións ás que chaman os eventos
*/

// function arrancamos () {
// 	alert('😀 Moi boas 😃');
// }

function premerBoton () {
 var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);

function iniciar() {
}

function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById('localizacion');
    var datos = '';
    datos += 'Latitud: ' + posicion.coords.latitude + '<br>';
    datos += 'Longitud: ' + posicion.coords.longitude + '<br>';
    datos += 'Exactitud: ' + posicion.coords.accuracy + ' metros.<br>';
    ubicacion.innerHTML = datos;
}

function gestionarErrores(error) {
    alert('Error: ' + error.code + ' ' + error.message + '\n\nPor favor compruebe que está conectado ' +
        'a internet');
}

window.addEventListener('load', iniciar, false);


function consultarHora() {
    var ahora=Date();
    document.getElementById("hora").innerHTML = ahora;
}