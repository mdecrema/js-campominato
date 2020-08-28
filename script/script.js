var cento = numeriPossibili();
var check = generatoreNum();
var check2= console.log(confrontoNum());




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

function confrontoNum(richiestaNum) {
  var richiestaNum = prompt("Inserisci un numero:");
  var gameOver=false;
  for (var i = 0; i <= cento.length; i++) {
    if (check.includes(richiestaNum)) {
      gameOver=true;
    } else {
      gameOver=false;
    }
  }
  return gameOver;
};
