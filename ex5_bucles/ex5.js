/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: for, while
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina de bucles </h1>')

/*	
	bucle WHILE
*/
document.write('<h2> Bucle WHILE</h2>');

//exercicio 1
document.write('<h3>☞ Contar ata cinco</h3>');
numerito = 0;
while (numerito <=5){
	document.write(numerito + ' ');
	numerito++;
}

// //exercicio 2
// document.write('<h3>☞ Preparar bocata</h3>');
// var comida = 'Pan con';
// while (comida != 'nada') {
// 	document.write(comida+ ' ');
// 	comida  = prompt('Que vos apetece comer con pan?');
// }


/*	
	Bucle FOR
*/
document.write('<h2> Bucle FOR</h2>');

//exercicio 1
document.write('<h3>☞ Facer algo cinco veces</h3>');
for (var i=1; i<= 5; i++) {
	document.write('quieres que te cuente el cuento de la buena pipa? ');
}

//exercicio 2
document.write('<h3>☞ Aprender a contar ata 10</h3>');
for (var i=0; i<= 10; i++) {
	document.write(i +', ');
}

//exercicio 3
document.write('<h3>☞ Aprender a contar hasta cierto numero de cinco en cinco comezando en 0</h3>');
for (var i=0; i<= 45; i=i+5) {
	document.write(i +', ');
}

//exercicio 4
document.write('<h3>☞ Outra canción infantil</h3>');
for (var i=2; i<= 10; i++) {
	document.write(i +' 🐘 se balanceaban sobre la tela... ');
}


//A partir de aqui es todo mio
document.write('<h3> Dias de la semana </h3>')
var dias =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var NumeroDias = dias.length -1;
var i = 0;
while (i <= NumeroDias) {
	document.write( dias[i] + "<br>" );
	i++
}