/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('Tienes un nombre?');
alert('Encantada yo soy el el ejercicio1 '+ dato);


// o navegador sabe HTML:
document.write('<img src="../logo.png" alt="Algo falla con el logo">');
document.write('<h1>Estas en el primer ejercicio</h1>'); // podemos inserir HTML
document.write('Quiero resaltar que este es facil ' + dato); //non fai caso dos saltos de liña
document.write('Recuerda que en javascript se pueden usar etiquetas de html: <br>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('Quieres abandonar esta pagina? ');

if(marchamos)
{
	document.write('<br> Espero que te encuentres con mi amigo el ejercicio2 '+ dato);
} 
else 
{
	document.write('<br>Aun sigues dudando algo? '+ dato);
}