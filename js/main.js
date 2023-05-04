/* RICHIESTA
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. */

const numeriGenerati = [];
let somma = 0;

for (let i = 0; i < 5; i++) {
    let richiestaNumero = parseInt(prompt("Inserisci un numero"));

    console.log(richiestaNumero);

    numeriGenerati.push(richiestaNumero);

    somma += numeriGenerati[i];
}

console.log(numeriGenerati);
console.log(somma);