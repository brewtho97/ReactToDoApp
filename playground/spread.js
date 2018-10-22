/*
function add(a, b) {
  return a + b;
}

console.log(add(3,1));

let toAdd = [9,5];
console.log(add(...toAdd));

let groupA = ['Tom', 'Matt'];
let groupB = ['Andy'];
let final = [...groupB, ...groupA];
console.log(final);
*/

let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

function greet(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

console.log(greet(...person));