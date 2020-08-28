var ciao = generatoreNumero();
function generatoreNumero(numeri) {
  var numeri = Math.floor(Math.random()*100)+1;
  return numeri;
};

function cicloNumRandom(ciao) {
  var min = 1;
  var max = 16;
  var insiemeNumeri= "";
  var listaNumeri = [];
  for (i=min; i<= max; i++){
    bu = ciao * i;
    listaNumeri.push(insiemeNumeri);
  }
  return listaNumeri;
};

var verifica = console.log(cicloNumRandom());
