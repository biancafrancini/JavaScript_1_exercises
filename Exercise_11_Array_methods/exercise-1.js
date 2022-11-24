function adultFilter(persons) {
  return persons.filter((person) => person.age >= 18);
}

/** Solution Two:
function adultFilter2(persons){
  let newArrayPersons = [];
  persons.forEach((person) => {
    if(person.age >= 18){
      newArrayPersons.push(person);
    }
  });
  return newArrayPersons;
}

* Solution Three:
function adultFilter3(persons) {
  let adultPersons = persons.map((person) => {
    if (person.age >= 18) {
      return person;
    }
  });
  let newArrayPersons = adultPersons.filter((person) => element !== undefined);
  return newArrayPersons;
 }; */

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);

/** console.time()
adultFilter(persons)
console.timeEnd()

console.time()
adultFilter2(persons)
console.timeEnd()

console.time()
adultFilter3(persons)
console.timeEnd()*/
