


// Funzione che genera un numero random dato un valore minimo ed uno massimo
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

// Funzione per verificare che un numero non sia presente in un array
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
    while(numInseriti.length<8 && bomba == false) {
      var numUtente = parseInt(prompt("Inserisci un numero fra 1 e 100:"));
      if (validatore(numInseriti, numUtente) == false) {
        // Controllo che il numero inserito dall'utente non sia nell'elenco dei numeri bomba
        if (validatore(insiemeNumPoss, numUtente) == true) {
          bomba = true;
        } else {
          numInseriti.push(numUtente);
        }

      }
    }
 return bomba;
};

var check = console.log(richiestaNum());

function livelloRaggiunto() {
  if (bomba == true) {
    alert("BOMBA! Hai perso. Livello raggiunto: "+numInseriti.length);
  } else {
    alert("HAI VINTO!!!");
  }
};

var checkFinale = console.log(livelloRaggiunto());
