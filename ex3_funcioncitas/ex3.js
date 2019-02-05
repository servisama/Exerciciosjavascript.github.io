/* 
 	Código en JavaScript
	Nome do ficheiro: ex3.js
	Usado: function
/ *

 /*	
  	Función sen parámetros
*/
function saudar () {
 	var dato='todos';
	alert('Este es el ejercicio3 para '+ dato);
 }


 /*	
 	Función á que lle pasamos un parámetro e fai o que lle pedimos
 */
 function cotillear(algo) {
 	document.write('<br> Estais listos chicos '+ algo);
 }

 /*	
// 	Función á que lle pasamos dous parámetros e devolve un valor
*/
 function calcularMedia(n1,n2) {
 	final=(n1+n2)/2;
	return final
 }


 document.write('<img src="../logo.png" alt="Alguien a puesto mal el logo y no se quien sera">');
 document.write('<h1>Este es un ejercicio de funciones</h1>');

 document.write('Las basicas son: <code>alert(), prompt(), parseInt()</code> <br>');
 document.write('Las importantes son <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
 document.write('<hr>Incluso podremos poner algunas propias: <code>saudar(), cotillear(), calcularMedia()</code><br>');
 document.write('Podremos hacer cosas como:  <hr>');


 //chamada á función saudar()
 saudar();

 document.write('Con la función <code>cotillear()</code><br>');
 cotillear('Si Capitan');
 cotillear('No');
 cotillear('Si');

 document.write('<hr>Chamada á función <code>calcularMedia()</code>');
 var nota=calcularMedia(5,4);
 document.write('<br> A túa nota final é... '+ nota);

 function despedir (){
 	alert("BYE")
 }
 despedir();

 /*function LEVELUP(x){
 	resultado = (x + 1);
 	return resultado;
}
 solucion=LEVELUP(1);
 alert(solucion)

 solucion=LEVELUP(2);
 alert(solucion)
 document write("BONUS")

Diciembre = prompt ("Que nota tienes en Diciembre")
Abril = prompt ("Que nota tienes en Abril")

function MEDIA (Diciembre,Abril){
	resultado =parseFloat(Diciembre) + parseFloat(Abril)/2;
	return = resultado ;
}
MEDIA (Diciembre, Abril)
alert (resultado) ; */*/