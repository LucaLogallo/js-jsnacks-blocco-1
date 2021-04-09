var numeri = [];
var numeroUtente
for(var i = 0; i < 6; i++){
 numeroUtente = parseInt(prompt("inserire il "+(i+1)+"numero di 6"));
 console.log(numeroUtente);
  if(numeroUtente%2 !== 0){
    numeri[i] = numeroUtente;
    console.log("il numero dispari "+numeri[i]+" è stato inserito nel vettore");
  }
  else{
    console.log("il numero "+numeroUtente+" non è un numero pari");
  }
}