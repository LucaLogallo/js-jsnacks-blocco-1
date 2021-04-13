var arrNumeri = [];

do{
  var j = parseInt(prompt("inserisci la grandezza della lista di numeri"));
}while(j<2);

console.log(j);

do{
  var x = parseInt(prompt("inserisci il quantitativo dei primi n numeri ai quali fare l'esponenziale"))
}while(x<2 && x>j);

console.log(x);

for(var i=0; i<j; i++ ){
  arrNumeri[i] = parseInt(prompt("inserisci il numero che vuoi mettere nella posizione numero "+(i+1)));
  console.log("numero"+i+" "+arrNumeri[i])
}

var arrNumeriPow = [];

for(var i=0; i<x; i++){
  arrNumeriPow[i] = Math.pow(arrNumeri[i],2);
  console.log("nuemro "+arrNumeri[i]+" numero elevato al quadrato: "+arrNumeriPow[i]);
}