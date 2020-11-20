console.log("hello world");

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var mineDifficolta = 0;
var difficoltà = parseInt(prompt("scegli un livello di difficoltà tra 0 / 1 / 2"))
switch (difficoltà) {
  case 1:
      mineDifficolta = 80;
    break;
  case 2:
    mineDifficolta = 50;
    break;
  default:
  mineDifficolta = 100;
}
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrayNumeri = [];

while (arrayNumeri.length < 16) {
  var numeroCaso = numeriCasuali(mineDifficolta, 1);
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
var richiestaNumeri = mineDifficolta - 16;
// test
// richiestaNumeri = 5;

var perso = false;
while (arrayUtente.length < richiestaNumeri && perso != true) {
  var numeriUtente = parseInt(prompt("inserisci numeri"));
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
  if ( verifica(numeriUtente, arrayNumeri) == false && verifica(numeriUtente, arrayUtente) == false ) {
    arrayUtente.push(numeriUtente);
  } else {
    alert("fine parita");
    perso = true;
  }
}
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
alert("punteggio: " + arrayUtente.length)
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log(arrayUtente.sort());
console.log("punteggio: ", arrayUtente.length);



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
