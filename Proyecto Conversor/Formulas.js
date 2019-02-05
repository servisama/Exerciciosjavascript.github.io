
function metros(){
  valores=prompt("Cuantos kilometros quieres convertir");

  calculo1=(valores*1000);
  alert(calculo1 + "m");

}


function Bytes(){
  valores=prompt("Cuantos GBytes quieres convertir");

  calculo2=(valores*1024);
  alert(calculo2 + "MB");

}

function dolarcillos(){
  valores=prompt("Cuantos dollars quieres convertir");

  calculo3=(valores*0.87);
  alert(calculo3 + "€");

}  

{
document.write('<button onclick="metros()"> De metros a km</button>');

document.write('<button onclick="Bytes()"> De MB a GB</button>');

document.write('<button onclick="dolarcillos()"> De € a $</button>');
}