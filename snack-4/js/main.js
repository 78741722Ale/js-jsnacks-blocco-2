/* 
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// Array di numeri interi
const arrayNumbers = [11, 10, 17, 18, 23, 25, 28, 30];
console.log(arrayNumbers);

// sommma già a 0
let somma = 0;
console.log(typeof somma);

// Variabile I
let i = 0;
console.log(typeof i);

while (i <= arrayNumbers.length) {
    // Risoluzione del problema
    if (i % 2 !== 0) {
        somma = somma + arrayNumbers[i];
    } 
    // Numero di Volte da ripetere
    i++
}

console.log(`la somma dispari è ${somma}`);