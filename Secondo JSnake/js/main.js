/* Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array */

// Creo array vuoto
const numeriGenerati = [];

// Creo loop
for (let i = 0; i < 6; i++) {
    // Chiedo numero a utente
    let richiestaNumero = parseInt(prompt("Inserisci un numero"));

    // Riporto numero richisto in console
    console.log(richiestaNumero);

    // SE dispari allora pusha in array vuoto
    if (richiestaNumero % 2 === 1) {
        numeriGenerati.push(richiestaNumero);
    }
}

// riporto valori dell'array in console
console.log(numeriGenerati);