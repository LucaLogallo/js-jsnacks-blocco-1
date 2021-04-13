/* 
FACCIO {
  assegno alla variabile numeroUtente il valore intero inserito da tastiera dall'utente
}FINQUANDO(il numeroUtente è compreso tra 1111 e 9999) 

inizializzo la variabile somma = 0;

inizializzo la variabile r = 0;

FINQUANDO( il numeroUtente rimane diverso da 0 )
  ALLORA
    assegno ad r il valore dell'operazione numero utente modulo 10
    assegno a somma il valore dell'addizione tra somma stessa e la variabile r
    assegno al numeroutente il valore dell'operazione numero utente - r tutto / 10

1111
111,1
111
11,1
11
1,1
1
0,1
0



*/





/* PRIMA SOLUZIONE */
/* do{

  var numeroUtente = parseInt(prompt("inserisci il numero")); //inserimento da tastiera

}while(numeroUtente < 1111 || numeroUtente > 9999);

var somma = 0;                   
var r = 0;                       
while( numeroUtente > 0){         
  r = numeroUtente%10;           
  somma = somma + r ;
  console.log(somma);
  numeroUtente = (numeroUtente - r) / 10;
  console.log(numeroUtente);
}

console.log(somma); */
/* /PRIMA SOLUZIONE */

/* SECONDA SOLUZIONE */
/* do{

  var numeroUtente = parseInt(prompt("inserisci il numero")); //inserimento da tastiera

}while(numeroUtente < 1111 || numeroUtente > 9999);

var arrNumeri = [];
var counter = 0;
while( numeroUtente > 0){
  r = numeroUtente%10;
  arrNumeri[counter] = r;
  numeroUtente = (numeroUtente - r) / 10;
  console.log(arrNumeri[counter]);
  counter++;
}

console.log(arrNumeri.length);
var somma1 = 0;

for(var i = 0; i < counter; i++ ){
  somma1 += + arrNumeri[i];
  console.log(somma1);
} */
/* /SECONDA SOLUZIONE */

/* TERZA SOLUZIONE (carattere stringa di caratteri valori) */

do{

  var numeroUtente = prompt("inserisci il numero da 4 cifre"); //inserimento da tastiera

}while(numeroUtente.length < 4 || numeroUtente.length > 4);

var x = 0;
var somma2 = 0;
for(i = 0; i< numeroUtente.length; i++){
  x = numeroUtente[i];
  somma2 += parseInt(x);
  console.log(x);
}

console.log(somma2);