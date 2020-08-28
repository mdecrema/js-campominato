var ciao = generatoreNumero();
function generatoreNumero(numeri) {
  var numeri = Math.floor(Math.random()*100)+1;
  return numeri;
};

function numeriBombaFacile(ciao) {
  var min = 1;
  var max = 16;
  var bu= "";
  var listaNumeri = [];
  for (i=min; i<= max; i++){
    bu = ciao * i;
    listaNumeri.push(bu);
  }
  return listaNumeri;
};

var zingaro = console.log(numeriBombaFacile());
