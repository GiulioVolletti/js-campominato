console.log("hello world");

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrayNumeri = [];

while (arrayNumeri.length < 16) {
  var numeroCaso = numeriCasuali(100, 1);
  var verificaDati = verifica(numeroCaso, arrayNumeri);
  // I numeri non possono essere duplicati.
  if (verificaDati == false) {
    // console.log(verificaDati);
    arrayNumeri.push(numeroCaso);
  }
}

console.log(arrayNumeri.sort());
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var arrayUtente = [];
var richiestaNumeri = 100 - 16;
// test
richiestaNumeri = 5;

while (arrayUtente.length < richiestaNumeri) {
  var numeriUtente = parseInt(prompt("inserisci numeri"));
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
  if ( verifica(numeriUtente, arrayUtente) == false ) {
    arrayUtente.push(numeriUtente);
  }
}
console.log(arrayUtente.sort());
console.log("punteggio: ", arrayUtente.length);

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//---------------------------------------
function numeriCasuali(max, min ){
  return Math.floor(Math.random() * max  + min) ;
}
function verifica(numero, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) return true;
  }
  return false;
}
