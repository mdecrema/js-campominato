var valore = generatoreNumero();
function generatoreNumero(numeri) {
  var numeri = Math.floor(Math.random()*100)+1;
  return numeri;
};

function cicloNumRandom(valore) {
  var min = 1;
  var max = 16;
  var insiemeNumeri= "";
  var listaNumeri = [];
  for (i=min; i<= max; i++){
    insiemeNumeri = valore * i;
    listaNumeri.push(insiemeNumeri);
  }
  return listaNumeri;
};

var verifica = console.log(cicloNumRandom());
