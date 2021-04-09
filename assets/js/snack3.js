var numeri = [];
var somma = 0;

for(var i=0; i<10; i++){
  numeri[i] = parseInt(prompt("Inserisci il "+(i+1)+" numero"));
  console.log(numeri[i]);
  somma += numeri[i];
  console.log(somma);
}

console.log("la somma è: "+somma);