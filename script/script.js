var cento = numeriPossibili();
var check = console.log(generatoreNum());


function generatoreNum() {
  var insiemeNumeri = [];
  for (i=1; i<=16; i++) {
    var numGen = Math.floor(Math.random()*cento.length);
    insiemeNumeri.push(numGen);
  }
  return insiemeNumeri;
};

function numeriPossibili() {
  insiemeNumPoss = [];
  for (i=1; i<=100; i++) {
    insiemeNumPoss.push(i);
  }
  return insiemeNumPoss;
};
