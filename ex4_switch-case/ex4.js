/* 
	Código en JavaScript
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con condicionais</h1>');

// varios caracteres entre comiñas forman unha cadea (string)
var resposta = prompt('Que tipo de persona eres -estupenda- -marabillosa- -guapo-? ');
document.write('Eres una persona muy ' + resposta +  '<br>'); // unha cadea detrás da outra co signo +

/*	
	avaliamos o que introduce o usuario
*/

switch(resposta)
{
	case 'estupenda':
		document.write('POR SUPOSTO 😆');
	break;
	case 'marabillosa':
		document.write('QUE SORTE 🤣');
	break;
	
		case 'guapa':
		document.write('🤨 EGOLATRA');
	break;
	default:
		document.write('MÁGOA!! 😫');
	break;
}; 

document.write('<h6>Hazte sentir mejor con el ejercicio6</h6>');