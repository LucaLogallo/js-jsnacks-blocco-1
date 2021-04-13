var numero = 0;
var potenza2 = 0;
while(potenza2 < 1000){
  console.log(numero)
  var potenza2 = Math.pow(2,numero);
  numero++;
  
  if(potenza2<1000){
    console.log(potenza2);
    console.log(numero);
  }
}