
// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio)

document.write(misterio);

var elige = prompt('Hacierta el numero misterioso entre 0 y 10')

if (elige == misterio)
{
	alert("Winner Winner Chicken Dinner")//alerta in
}
if (elige != misterio)
{
	alert("GAME OVER")
}
