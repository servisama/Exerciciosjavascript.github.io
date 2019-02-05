/* 
	Código en JavaScript
	Nome do ficheiro: ex9.js
	Usado: getElementById(), innerHTML
	*/

/*	
	Este ficheiro só contén as funcións. Todo o demáis está no .html
	*/


//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
function cambiarCor(colorin) {
	var letras = document.getElementById('textito');
	letras.style.color = colorin;
}

function FondoAnimado() {
  document.body.style.backgroundColor = "#ff8800";
  document.getElementById("orange").style.color = "blue";
  document.getElementById("blue").style.color = "red";
  document.getElementById("rlue").style.color = "red";
}

function FondoOriginal() {
  document.body.style.backgroundColor = "white";
  document.getElementById("orange").style.color = "orange";
  document.getElementById("blue").style.color = "darkgreen";
  document.getElementById("rlue").style.color = "darkgreen";
}

function procesarDatos(){
	var aa;
	var nn;
	aa = document.getElementById('apelido').value;
	nn = document.getElementById('nome').value;
	alert('Vostede é ' + nn +' '+ aa);
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
function cambiarTexto() {
	document.getElementById("parrafada").innerHTML = "Siempre tocando donde no te combiene";
}

function consultarHora() {
	var agora=Date();
	document.getElementById("hora").innerHTML = agora;
}