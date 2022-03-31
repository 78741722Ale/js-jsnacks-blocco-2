/* 
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// Array di numeri interi
const arrayNumbers = [7, 6, 17, 17, 23, 25, 27, 31];
console.log(arrayNumbers);

// sommma già a 0
let somma = 0;
console.log(typeof somma);

// Array vuoto per aggiungere numero
const arrayNull = [];

// Variabile I
let i = 0;
console.log(typeof i);

// Valore booleano, settato su false
let control = false;

while (i < arrayNumbers.length) {
    // Risoluzione del problema
    if (i % 10 !== 0) {
        // Variabile Boolean settata su True
        control = true;
        // Variabile somma dichiarata
        somma += arrayNumbers[i];
    } else if (i % 5 === 0) {
        control = true;
        // Variabile somma dichiarata
        somma += arrayNumbers[i];
    } else if (i % 3 === 0) {
        control = true;
        // Variabile somma dichiarata
        somma += arrayNumbers[i];
    } else if (i % 2 !== 1) {
        // Variabile Boolean settata su True
        control = true;
        // Variabile somma dichiarata
        somma += arrayNumbers[i];
    }

    arrayNull.push(somma);
    console.log(somma);
    // Numero di Volte da ripetere
    i++
}

console.log(`la somma dispari è ${somma}`);