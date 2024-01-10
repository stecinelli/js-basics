// ----- Task 1 -------
const age = 32;
console.log(`Exercise 1: this is my age: ${age}`);

// ----- Task 2 -------
// can be changed
let x = 1;

// should be static
const y = 2;

// can be used in the browser
var z = 3;

// ----- Task 3 -------
const num = 1;
const str = "this is a string";
const bol = true;
const arr = [1, 2, 3];
const obj = { key1: "key 1", key2: 2, key3: false };

console.log("Exercise 3:", num);
console.log("Exercise 3:", str);
console.log("Exercise 3:", bol);
console.log("Exercise 3:", arr);
console.log("Exercise 3:", obj);

// ----- Task 4 -------

// should be 'let' to enable reassing
let name1 = "Maria";
console.log("Exercise 4:", name1);
name1 = "Jose";
console.log("Exercise 4:", name1);

// ----- Task 5 -------
//booleans should be use in situation were you have only 2 viable options.
//EX: eneble/deseable, open/close
const isOpen = true;

// ----- Task 6 -------
// you should use 'const' to assure that the value will remain the same in execucion time.
const c = "this will not change";

// ----- Task 7 -------
const number1 = 1;
const number2 = 2;
const result = number1 + number2;
console.log("Exercise 7:", result);

// ----- Task 8 -------
const result1 = number1 - number2;
const result2 = number1 * number2;
const result3 = number1 / number2;
console.log(
  "Exercise 8:",
  "subtraction:",
  result1,
  "multiplication:",
  result2,
  "division:",
  result3
);
// ----- Task 9 -------
let b = 10;
console.log("Exercise 9:", b);
b = b + 5;
console.log("Exercise 9:", b);

// ----- Task 10 -------

let a = 10; //10
a = a - 4; //6
a = 7; //7
a = a + 2; //9
console.log("Exercise 10:", a);
