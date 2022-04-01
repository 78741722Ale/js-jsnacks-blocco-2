// Snack 5 - consegna

/* 
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno 
elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Crea due array con n di elementi differenti
const arrayFirst = ["Pizza", "Pasta", "Pane", "Pollo"];
const arraySecond = ["Cioccolata", "Pistacchi", "Nocciole", "Mandorle", "Gianduiotti", "Brioches"];
console.log(arrayFirst, arraySecond);

// Variabile Booleana settata su false 
let verifica = false;

// Variabile i settata su 0
let i = 0;

// Ciclo While
while (i < arrayFirst.length) {

    // Condizione in cui si aggiungono nuovi nomi al primo array
    if (arrayFirst.length < arraySecond.length) {
        // Variabile boolean su true
        verifica = true;
        // Nuova costante con N volte (i)
        const addObject = arrayFirst[i]
        // Push dentro al primo array
        arrayFirst.push(addObject); 
    }

     // N volte da ripetere ciclo while
    i++
}

console.log(arrayFirst);

