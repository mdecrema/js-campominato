var cento = numeriPossibili();
var check = console.log(generatoreNum());


function generatoreNum() {
  var insiemeNumeri = [];
  for (i=1; i<=16; i++) {
    var numGen = Math.floor(Math.random()* cento.length);
    cento.splice(numGen, 1);
    insiemeNumeri.push(numGen);
  }
  return cento;
};


function numeriPossibili() {
  var insiemeNumPoss = [];
  for (i=1; i<=100; i++) {
    insiemeNumPoss.push(i);
  }
  return insiemeNumPoss;
};
