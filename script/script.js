var cento = numeriPossibili();
var check = console.log(generatoreNum());
var gioca = gioca();



function generatoreNum() {
  var insiemeNumeri = [];
  for (i=1; i<=16; i++) {
    var numGen = Math.floor(Math.random()* cento.length);
    cento.splice(numGen, 1);
    insiemeNumeri.push(numGen);
  }
  return insiemeNumeri;
};


function numeriPossibili() {
  var insiemeNumPoss = [];
  for (i=1; i<=100; i++) {
    insiemeNumPoss.push(i);
  }
  return insiemeNumPoss;
};

function gioca(richiestaNum) {
  var richiestaNum = prompt("Inserisci un numero:");
  var gameOver=false;
  for (i=1; i<=84; i++) {
    if (check.includes(richiestaNum)) {
      gameOver=true;
      alert("LOSER");
    }
  }
};
