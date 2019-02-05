/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Has puesto mal el logo">');
document.write('<h1> Basicamente esto es una calculadora </h1>')

// as variables decláranse
var num1; 
var num2;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Cual es el primer valor? ');
num2 = prompt('Cual es el segundo valor? ');

// convertimos a números
var solucionado = parseInt(num1)+parseInt(num2);
document.write('Y el resultado es '+ solucionado);

// fallos nos cálculos
var num3 = 0;
document.write('<br> <hr>Escribe bien los numeros si divido entre 0 puedo explotar'+ num1/num3); // opsssss


document.write('<hr><h3>Voy a crear un numero entre 0 y 10</h3>');

var misterio = Math.random();
document.write('<br>Procesando: '+ misterio);

//olliño con este truquito para non crear máis variables
misterio = misterio*10;
document.write('<br> Y ahora esta entre 0 y 10: '+ misterio);

//olliño con este truquito para non crear máis variables (outra vez)
misterio = Math.round(misterio)
document.write('<br> Voy a dejarlo bonito de esta forma '+ misterio);