/* 

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

// Inserisci un numero

// Condizione iniziale della varaibile boolean già falsa
let somma = 0;
let variabile = 1;
console.log(typeof variabile, typeof somma);

// Numero dichiarato nell'input
const userNumber = parseInt(document.getElementById("userNumber").value);
console.log(typeof userNumber);

// Risoluzione con Ciclo While
// console.log("Ciclo While");
// let i = 0;
// while (i <= 2) {
//     if (userNumber % 2 === 0) {
//         // Stampo il numero in console log
//         console.log(`Il numero è ${userNumber}`);
//     } else {
//         let somma = userNumber + variabile;
//         // Stampo il numero in console log
//         console.log(`Il numero è ${somma}`);
//     }
//     i++
// }


// Senza Ciclo While

// Numero dichiarato nell'input
let userNumber_2 = 16;
console.log(typeof userNumber_2);

if (userNumber_2 % 2 === 0) {
    // Stampo il numero in console log
    console.log(`Il numero è ${userNumber_2}`);
} else {
    // Stampo il numero in console log
    console.log(`Il numero è ${++userNumber_2}`);

    

}



