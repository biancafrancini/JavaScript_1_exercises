const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

//* Scrivendo const person2 = person1; andiamo a puntare la nuova costante person2 nello stesso spazio/punto/contenitore della const person1, senza realmente creare un nuovo spazio per 
// la const person2. Questo comporta che le due const, pur essendo chiamate in modo diverso, si riferiscono allo stesso identico spazio/punto/contenitore, quindi modificando 
// una delle due const, si va comunque a modificare lo stesso identico punto a cui entrambe si riferiscono. E questo ne comporta la stessa modifica per una e per l'altra 
//const contemporaneamente. Facendo invece una COPIA della const person1 e chiamandola person2, andiamo a creare un nuovo spazio/punto/contenitore 
// che sarà sì uguale per valori e proprietà alla const person1, ma sarà proprio come avere un secondo spazio/punto/contenitore, del tutto nuovo e che si riferisce solo alla const person2.
// Quindi, così facendo, se modifichiamo il valore o le proprietà di una delle due const, non andremo piú a modificare anche quelle dell'altra, perché le due const si riferiscono a due 
// spazi/punti/contenitori diversi (seppur in partenza identiche per valori e proprietà)/*

console.log(person1);
console.log(person2);
