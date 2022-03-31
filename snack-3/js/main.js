/* 
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// lista di “nomi” casuali
const arrayFName = ["Alessandro", "Alessio", "Matteo", "Luigi"];
// lista di “cognomi” casuali
const arraySName = ["Pecorilla", "Piergianni", "Camilli" , "Manfredi"]
console.log(arrayFName, arraySName);


// Scegliamo un nome random dal primo array
// randomName = Math.floor(Math.random() * arrayFName.length);
// console.log(randomName, arrayFName[randomName]);
// Scegliamo un cognome random dal secondo array
// randomLastName = Math.floor(Math.random() * arraySName.length);
// console.log(arraySName, arraySName[randomLastName]);

// lista di nomi fuori dalla lista (vuoto)
const arrayFake = [""];

let i = 0;

while (i <= arrayFName.length) { 
    const fakeNameComplete = arrayFName[i] + ' ' + arraySName[i];
    // Push dal nome fake
    arrayFake.push(fakeNameComplete)
    // Console Log
    console.log(arrayFake);
    // Ripetizione necessaria
    i++
}

