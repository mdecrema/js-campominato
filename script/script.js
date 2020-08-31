var cento = console.log(numeriPossibili());
var check = console.log(richiestaNum());
//var numUtente= console.log(richiestaNum());


function generatoreNum(numMin, numMax) {
  var num = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin;
  return num;
};


function numeriPossibili() {
  var insiemeNumPoss = [];
  while (insiemeNumPoss.length<16) {
    var numGen = generatoreNum(1, 100);
    if (validatore(insiemeNumPoss, numGen) == false) {
      insiemeNumPoss.push(numGen);
    }
}
return insiemeNumPoss;
};

function validatore(array, elemento) {
  var numeroUguale = false;
  var i = 0;
    while (i < array.length && numeroUguale == false) {
      if (array[i] == elemento) {
        numeroUguale = true;
      }
    i++;
  }
  return numeroUguale;
};

function richiestaNum() {
  var numInseriti = [];
    while(numInseriti.length<3) {
      var numUtente = parseInt(prompt("Inserisci un numero fra 1 e 100:"));
      if (validatore(numInseriti, numUtente) == false) {
        numInseriti.push(numUtente);
      }
  }
 return numInseriti;
};
