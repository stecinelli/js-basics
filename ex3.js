const prompt = require("prompt-sync")();

console.log("This is a Calculator");

var number1 = prompt("So, please give me one number:");
var number2 = prompt("now, another one:");
var calc = prompt(
  "Which mathematical operation (+ , - , * , /) do you want to perform? "
);

const add = (n1, n2) => parseInt(n1) + parseInt(n2);
const sub = (n1, n2) => parseInt(n1) - parseInt(n2);
const mul = (n1, n2) => parseInt(n1) * parseInt(n2);
const div = (n1, n2) => parseInt(n1) / parseInt(n2);

const calculation = (operator, n1, n2) => {
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return sub(n1, n2);
  } else if (operator === "*") {
    return mul(n1, n2);
  } else if (operator === "/") {
    return div(n1, n2);
  } else return "invalid operator";
};

console.log(
  "The RESULT for your operation is: ",
  calculation(calc, number1, number2)
);
