var check = numeriPossibili();
var check2 = console.log(generatoreNumeri());

function numeriPossibili() {
  var insiemeNumeri = "";
  var listaNumeriPossibili = [];
  for (i=1; i<=100; i++) {
    insiemeNumeri += i +",";
  }
  listaNumeriPossibili.push(insiemeNumeri);
  return listaNumeriPossibili;
};
