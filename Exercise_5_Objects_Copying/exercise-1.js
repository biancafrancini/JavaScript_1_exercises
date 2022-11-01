const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


// Modify the property `firstName` of the `person2` in "Simon".
const person2 = Object.assign({}, person1);

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//English - Why?:
//const person2 = person1 is like pointing both consts at the same container/storage space. 
//This means that we will not have a real new variable, but just a new reference to an already existing container/variable.
//However, if we created a real copy of the first variable (const person1), calling it const person2 and using Object.assign() method to get the same value and properties' name of const person1,
//we will be able to create a new container/storage space without being a reference to the same person1's container, like a new and different container of values
//(even if const person2 will start with the same value and properties of const person1).
//In other words, this means that if we modify one of the person2 properties or values (or vice versa), 
//we will modify only these const properties or values, but we will not modify the const person1 properties or values too. 
//This is because we will have two different containers/storage spaces, and modifying one of them will not modify both, but just the one we selected (in this case, person2)./*

// Italiano - Perché?:
//* Scrivendo const person2 = person1; andiamo a puntare la nuova costante person2 nello stesso spazio/punto/contenitore della const person1, senza realmente creare un nuovo spazio per 
// la const person2. Questo comporta che le due const, pur essendo chiamate in modo diverso, si riferiscono allo stesso identico spazio/punto/contenitore, quindi modificando 
// una delle due const, si va comunque a modificare lo stesso identico punto a cui entrambe si riferiscono. E questo ne comporta la stessa modifica per una e per l'altra 
//const contemporaneamente. Facendo invece una COPIA della const person1 e chiamandola person2, andiamo a creare un nuovo spazio/punto/contenitore 
// che sarà sì uguale per valori e proprietà alla const person1, ma sarà proprio come avere un secondo spazio/punto/contenitore, del tutto nuovo e che si riferisce solo alla const person2.
// Quindi, così facendo, se modifichiamo il valore o le proprietà di una delle due const, non andremo piú a modificare anche quelle dell'altra, perché le due const si riferiscono a due 
// spazi/punti/contenitori diversi (seppur in partenza identiche per valori e proprietà)/*
