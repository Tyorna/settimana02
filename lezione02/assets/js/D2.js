/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById('testo').innerHTML= 'Abbiamo dei principali datatype in Javascript che servono a definire dei dati nel linguaggio di programmazione. I tipi principali sono 5: Stringhe, Numeri, Booleani, Null e Undefined. Il computer in base alla loro sintassi li identificherà in uno dei tipi.<br>La Stringa o String è rappresentata da un parola, numero, simbolo o testo racchiusa in degli apici"". Sono stringhe sia "5" che "5 animali" che "animali".<br>Abbiamo poi i Numeri, che possono essere interi o decimali (separati con il punto).<br> E infine abbiamo i datatype Booleani che possono avere due valori: Vero o Falso. Principalmente si usano per controllare delle condizioni.<br>Undefined significa che la variabile è stata creata ma il valore è assente.<br>Null invece è simile ad undefined ma è un valore tralasciato intenzionalmente.';


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Francesca';
document.getElementById('nome').innerHTML= 'Il mio nome è ' + name;

//metto in console
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var numero = 12;
var numero2= 20;
var somma = numero + numero2;
var somma2 = 12 + 20; 
document.getElementById('scrivi').innerHTML= 'Primo modo: 12 + 20 fa: ' + somma;
document.getElementById('scrivi2').innerHTML= 'Secondo modo: 12 + 20 fa: ' + somma2;
document.getElementById('scrivi3').innerHTML=  12 + 20;

//metto in console
console.log(somma);
console.log(somma2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
document.getElementById('x').innerHTML= 'Il valore di x è ' + x;

//metto in console
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Arata'
document.getElementById('cognome').innerHTML= 'Il mio cognome è ' + name;

//metto in console
console.log(name);

const Pet = 'gatto';
document.getElementById('cos').innerHTML= 'Ho un ' +  Pet;

document.getElementById('cos2').innerHTML = "Non si può riassegnare un valore ad una costante. Compare un errore che mi blocca lo script. Si può vedere decommentando le righe sotto questa nello Js";
/*
  const Pet = 'cane';
document.getElementById('cos').innerHTML= Pet;
*/
//Se provo a mettere una nuova costante con lo stesso nome mi darà errore.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var numero4 = 4
var sottrazione = numero4 - x;
document.getElementById('sott').innerHTML= 'Primo modo: 4 - 12 fa: ' + sottrazione;
document.getElementById('sott2').innerHTML=  4 - x;

//metto in console
var sott = document.getElementById('sott2').innerHTML= 4 -x;
console.log(sott);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';

document.getElementById('ugual').innerHTML=  name1 == name2;
document.getElementById('ugual2').innerHTML= name1 != name2;

//metto in console

var falso = document.getElementById('ugual').innerHTML= name1 == name2;
var vero = document.getElementById('ugual2').innerHTML= name1 != name2;

console.log(falso);
console.log(vero);

//con la scritta
var nome4 = 'john e John sono uguali: ';
var nome7 = 'john e John non sono uguali: '
var nome5 = name1 == name2;
document.getElementById('ugual3').innerHTML=  nome4 + nome5;

var nome6 = name1 != name2;
document.getElementById('ugual4').innerHTML=  nome7 + nome6;


//extra

document.getElementById('extra').innerHTML= name1 == name2.toLowerCase();
document.getElementById('extra2').innerHTML= name1 != name2.toLowerCase();



//altro metodo
name3 = name2.toLowerCase();
document.getElementById('extra3').innerHTML= name1 == name3;
document.getElementById('extra4').innerHTML= name1 != name3;

//metto in console

var vero2 = document.getElementById('extra3').innerHTML= name1 == name3;
var falso2 = document.getElementById('extra4').innerHTML= name1 != name3;

console.log(vero2);
console.log(falso2);
