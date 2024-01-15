// Task 1
const greating = () => "Hello there my friend!";
console.log(greating());

// Task 2
const greatingName = (name) => `Hello there my friend! You must be ${name} `;
console.log(greatingName("Steph"));

// Task 3
const add = (n1, n2) => parseInt(n1) + parseInt(n2);

// Task 4
const div = (n1, n2) => {
  if (n2 === 0) return "You should not divide by zero";
  return n1 / n2;
};
console.log(div(1, 0));
console.log(div(10, 5));

// Task 5
const area = (len, wid) => len * wid;
console.log(area(2, 2));

// Task 6
const greatingNameLast = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}! How are you doing? `;
console.log(greatingNameLast("Steph", "Cinelli"));

// Task 7
const convertToMiles = (km) => km * 0.621371;
console.log(convertToMiles(10));

// Task 8
const convertToFarenheit = (celsius) => celsius * 33.8;

// Task 9

const arrayMean = (array) => {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial / array.lenght;
};

// Task 10
const systembolaget = (age) => {
  if (age < 0) {
    return "This is not possible, you can not predict the future ;)";
  } else if (age < 15) {
    return "Get out of here!";
  } else if (age < 18) {
    return "Sorry, you are not old enough";
  } else if (age < 20) {
    return "Sorry, you must be atleast 20. Why don't you try a bar instead?";
  } else if (age < 81) {
    return "Thank you! Welcome!";
  } else if (age > 80) {
    return "I'm sorry, where is your caretaker?";
  }
};

// Task 11
const arraySum = (array) => {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};

// Task 12
const person = {
  name: "Maria",
  age: "20",
  city: "Stockholm",
  skills: ["Pokemon Master", "Kung Fu Legend", "Football Ninja"],
};

const getSkills = (somePerson) => console.log(somePerson.skills);

console.log(getSkills(person));
