const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

let keys = Object.keys(person);

let values = Object.values(person);

for (let i = 0, j = 0; i < keys.length, j < values.length; i++, j++) {
  console.log(`${keys[i]} : ${values[j]}`);
}
