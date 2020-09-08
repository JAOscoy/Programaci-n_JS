/*i = prompt("¿Que hora tienes?");
//var greeting;

//if (time >= 1 && time <= 12) {
  //greeting = "Es de mañana"
//} else if (time <= 20 && time >= 1) {
  //greeting = "Tardes!"
//} else if (time >=20 && time <=24) {
  //greeting = "Ya es de noche"
//} else {
   //greeting = "Estamos perdidos en el tiempo"
//}

//console.log(greeting)

var day = prompt("¿que dia es hoy?");
var text;
var day = Number(day);


switch (day) {
  case 0:
    text = "Lunes";
    break;
  case 1:
    text = "Martes";
    break;
  case 2:
    text = "Miercoles";
    break;
  case 3:
    text = "Jueves";
    break;
  case 4:
    text = "Viernes";
    break;
  case 5:
    text = "Sabado";
    break;
  case 6:
    text = "Domingo";
    break;
  default:
    text = "Error";

}

console.log(text); 

var speed = Number(prompt("¿Cual es tu velocidad?"));

var message = speed > 100 ? "You're going too fast!" : "Under the limit";

console.log(message);

var i = 0; 



for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;

for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      isPrime = false;
    }
  }
  if(isPrime) {
    console.log(counter);
  }
}


var i = 0;

while(q <= 100) {
    if (q % 2 === 0)
	console.log("El numero ganador es " + q);
	q++;
}

for(var o = 0; o <= 100; o++) {
    if(o % 2 ==! 0)
    console.log("El numero ganador es " + o)
}

var materials = ["Español", "Matematicas", "Ingles"];
var texto ="";
var i;

for(var 1 = 0; i <)

let arr = [ 1, 2, 3 ];
console.log( arr[1] );

var message = "no";
function foo(message) {
  message = "yes";
}
foo( message );
console.log( message );

let places = [
  { city: 'Amsterdam', europe: true },
  { city: 'Paris', europe: true },
  { city: 'Sacramento', europe: false }
];
let result = places[2].city;*/

while(q <= 100) {
  if (q % 2 === 0)
console.log("El numero ganador es " + q);
q++;
}

for(var o = 0; o <= 100; o++) {
  if(o % 2 ==! 0)
  console.log("El numero ganador es " + o)
}