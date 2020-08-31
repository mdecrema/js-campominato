
//var numUtente= console.log(richiestaNum());


function generatoreNum(numMin, numMax) {
  var num = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin;
  return num;
};


// Genero 16 numeri e li metto in un array
  var insiemeNumPoss = [];
  while (insiemeNumPoss.length<16) {
    var numGen = generatoreNum(1, 100);
    if (validatore(insiemeNumPoss, numGen) == false) {
      insiemeNumPoss.push(numGen);
    }
}
console.log(insiemeNumPoss);


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
  var bomba = false;
    while(numInseriti.length<84 && bomba == false) {
      var numUtente = parseInt(prompt("Inserisci un numero fra 1 e 100:"));
      if (validatore(numInseriti, numUtente) == false) {

        if (validatore(insiemeNumPoss, numUtente) == true) {
          alert("BOMBA! Hai perso!");
        } else {
          numInseriti.push(numUtente);
        }
      }
  }
 return numInseriti;
};

var check = console.log(richiestaNum());
