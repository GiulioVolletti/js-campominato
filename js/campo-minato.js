console.log("hello world");
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrayNumeri = [];
// I numeri non possono essere duplicati.
while (arrayNumeri.length < 16) {
  var numeroCaso = numeriCasuali(16, 1);
  var verificaDati = verifica(numeroCaso, arrayNumeri);
  if (verificaDati == false) {
    // console.log(verifica);
    // console.log("questo");
    arrayNumeri.push(numeroCaso);
  }
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// for (var i = 0; i < 16; i++) {
  //   prompt("inserire numero")
  // }
  // L’utente non può inserire più volte lo stesso numero.
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
  // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  // console.log(numeroCaso);
// i numeri non possono essere duplicati
console.log(arrayNumeri.sort());

//---------------------------------------
function numeriCasuali(max, min ){
  return Math.floor(Math.random() * max  + min) ;
}
function verifica(numero, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) {
      return true;
    }
  }
  return false;
}
