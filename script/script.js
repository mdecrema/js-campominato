// Variabile che richiama la funzione random
var valore = generatoreNumero();
// Funzione per generare numero random
function generatoreNumero(numeri) {
  var numeri = Math.floor(Math.random()*100)+1;
  return numeri;
};
// Funzione per ciclare i numeri random
function cicloNumRandom(valore) {
  var min = 1;
  var max = 16;
  var insiemeNumeri= "";
  var listaNumeri = [];
  for (i=min; i<= max; i++){
    listaNumeri.push(valore);
  }
  return listaNumeri;
};

var verifica = console.log(cicloNumRandom());
