var invitati = [
  "Giovanni Ferrero",
  "Leonardo Del Vecchio",
  "Stefano Pessina",
  "Massimiliana Landini Aleotti",
  "Giorgio Armani",
  "Silvio Berlusconi",
  "Giuseppe De'Longhi",
  "Gustavo Denegri",
  "Patrizio Bertelli",
  "Miuccia Prada"
]

var nomeInvitato = prompt("Inserisca il Suo nominativo, Prego");
var flag = false
for(var i = 0; i < invitati.length; i++){
  if(nomeInvitato == invitati[i]){
    flag = true
    break;
  }

}
if(flag){
   console.log("Benvenut* alla festa del grande Gatsby Sig./Sigg./Sig.na/Sig.ra/Sig.ra/sig.na "+nomeInvitato); 
}else{
  console.log("Mi dispiace ma lei non è nell'elenco degli invitati Sig./Sigg./Sig.na/Sig.ra/Sig.ra/sig.na "+nomeInvitato);
}
var visualizzaElenco = prompt("Inserisca si se vuole visualizzare l'elenco degli invitati alla festa del grande Gatsby altrimenti digiti no");

if(visualizzaElenco === "si" || visualizzaElenco === "Si" || visualizzaElenco === "SI"){
  console.log("ha scelto di visualizzare l'elenco degli invitati");
  for(var i = 0; i < invitati.length; i++){
    console.log("l'invitato numero :"+(i+1)+" è il Sig./Sigg./Sig.na/Sig.ra/Sig.ra/sig.na "+invitati[i]);
  }

}else if(visualizzaElenco === "no" || visualizzaElenco === "No" || visualizzaElenco === "NO"){
  console.log("ha scelto di non visualizzare l'elenco degli invitati");
  window.close();
}else{
  console.log("il carattere da lei inserito non è valido");
  window.close();
}