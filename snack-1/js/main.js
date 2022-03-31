
/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let sum, userNumber;
// Valore iniziale di Somma
sum = 0;

// Risoluzione del problema con ciclo For
console.log("Ciclo For");
for (let i = 0; i < 5; i++) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum = sum + userNumber;
}
// Verifica in console log
console.log(sum);


// Ciclo While 
console.log("Ciclo While");
let i = 0;
while (i < 5) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum = sum + userNumber;
    i++
}
// Verifica in console log
console.log(sum);

