var numeri = 1;
var somma = 0;

for(var i = 0; i < 10; i++){
  console.log(numeri);
  somma += numeri;
  numeri++;
  console.log(somma);
} 

var media = somma / 10;

console.log(media);