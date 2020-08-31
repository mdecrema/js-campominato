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

// Funzione che controlla numeri bomba e i numeri inseriti dall'utente e restituisce il livello raggiunto
function richiestaNum() {
  var numInseriti = [];
  var bomba = false;
  // Ciclo while per chiedere all'utente di inserire numeri finchè non sbaglia
    while(numInseriti.length<84 && bomba == false) {
      var numUtente = parseInt(prompt("Inserisci un numero fra 1 e 100:"));
      if (isNaN(numUtente) || numUtente < 1 || numUtente > 100) {
        alert("Errore! Devi inserire un valore fra 1 e 100! Riprova:")
      } else if (validatore(numInseriti, numUtente) == false) {
      // Controllo che il numero inserito dall'utente non sia nell'elenco dei numeri bomba
        if (validatore(insiemeNumPoss, numUtente) == true) {
          bomba = true;
        } else {
          numInseriti.push(numUtente);
        }
      }
    }
// Eseguo un controllo booleano in modo da definire il livello raggiunto
  if (bomba == true) {
    alert("BOMBA! Hai perso. Livello raggiunto: "+numInseriti.length);
  } else {
    alert("HAI VINTO!!!");
  }
};

// Eseguo la funzione
console.log(richiestaNum());
