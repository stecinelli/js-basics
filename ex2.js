const prompt = require("prompt-sync")();

// ----- Task 1 -------
var yourName = prompt("What is your name?");
console.log("Hello, " + yourName + "!");

// ----- Task 2 -------
var yourBirth = prompt("What is your year of birth?");

// ----- Task 3 -------
const age = new Date().getFullYear() - yourBirth;
console.log(
  yourName,
  ", now I know things about you ... like your age is",
  age
);

// ----- Task 4 -------

var number1 = prompt("So, please give me one number:");
var number2 = prompt("now, another one:");

// ----- Task 5 -------
const add = parseInt(number1) + parseInt(number2);
const sub = parseInt(number1) - parseInt(number2);
const mul = parseInt(number1) * parseInt(number2);
const div = parseInt(number1) / parseInt(number2);

console.log(
  "those are your results: Sum: ",
  add,
  ", subtraction: ",
  sub,
  ", multplication: ",
  mul,
  " and division: ",
  div
);

// ----- Task 6 -------
// this should be used in a browser.
// alert("This is it! Thanks ;)");
