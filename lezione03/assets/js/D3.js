/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var x = 10;
var y = 15;

  if (x < y){
  console.log('x è più piccolo di y');
} else {
  console.log('x è più grande di y');
}

//document.getElementById('grande').innerHTML= 'X è più piccolo di y';
//document.getElementById('grande').innerHTML= 'X è più grande di y';

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
var z= 10;
if (z != 5){
  console.log('z not equal to 5');
} else {
  console.log('z equal to 5');
}


  //document.getElementById('uguale').innerHTML= 'z not equal to 5';
 //document.getElementById('uguale').innerHTML= 'z equal to 5';


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var div= 10;
if (div % 5 == 0){
  console.log('divisibile per 5');
} else {
  console.log('non divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var otto = 10;
var menootto = 2;
if (otto == 8 || menootto == 8 || (menootto + otto) == 8 || (menootto - otto) || (otto - menootto) == 8 ){
  console.log('si il risultato in uno dei casi è 8');
} else {
  console.log('no il risultato non è in nessun caso 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 50;
if (totalShoppingCart >= 50){
  console.log('hai diritto alla spedizione gratuita!');
} else {
  console.log('la tua spedizione avrà un costo di 10 euro');
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 50;
if ((totalShoppingCart * 0.8) >= 50){
  console.log('hai diritto alla spedizione gratuita!');
} else {
  console.log('la tua spedizione avrà un costo di 10 euro');
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var a = 10;
var b = 130;
var c = 70;
if ( a < b && b < c) {
  console.log("c, b, a");
} else if ( b < a && a < c) {
  console.log("c, a, b");
} else if ( c < a && a < c){
  console.log("b, a, c");
} else if ( a < c && c < b) {
  console.log("b, c, a");
} else if ( c < b && b < a){
  console.log("a, b, c");
} else {
  console.log("a, c, c");
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var tipo = 'Jhon';
var numero = 5;
if (typeof numero == "number"){
  console.log('numero');
} else {
  console.log('non numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var par= 11;
if (par % 2 == 0){
  console.log('pari');
} else {
  console.log('dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 10
  if ( 5 < val && val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills = me.skills.pop()
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var mioArray = [];

mioArray.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.getElementById('myArray').innerHTML = mioArray;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

mioArray.splice(9, 1, '100');
document.getElementById('myNewArray').innerHTML = mioArray;
