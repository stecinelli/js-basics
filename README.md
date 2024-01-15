# js-basics

Basics JS exercises

## Exercise 1: Variables & Datatypes

1. Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
2. Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
3. Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.
4. Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?
5. Think about one case when we would like to use a boolean value. Discuss it with another person.
6. If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?
7. Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
8. Reuse the number1 and number2 variables and create three new variables:
   a. result1 should contain the difference (subtraction) between the numbers
   b. result2 should contain the product (multiplication) of the two numbers
   c. result3 should contain the quotient (division) of the two numbers
   d. Log them all to the console.
9. Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.
10. What is the value of a in the console.log?
    let a = 10;
    a = a - 4;
    a = 7;
    a = a + 2;
    console.log(a);
11. Explain each line of code in the previous question for a friend.

## Exercise 2: Operators exercises

1. Use prompt to ask the user for their name. Save this in a variable and use console.log to display a greeting message that includes their name.
2. Use the prompt to ask the user for their year of birth. Save this in a variable.
3. Calculate the user's age by subtracting the year of birth from the current year. You can get the current year with new Date().getFullYear() or just hardcode it. Save the result in a variable and use console.log to display a message that includes their age.
4. Use prompt to ask the user for two numbers. Save them in variables.
5. Use the +, -, \*, and / operators to perform addition, subtraction, multiplication, and division on these numbers. Use console.log to display the results of these operations.

Note that prompt ALWAYS returns a string. If you want it as a number, you must convert it to a number. You do that using "parseInt()". You use it by writing like this: const number = parseInt(someStringThatLooksLikeANumber).

6. Use alert to notify the user that the calculations are complete and that they can check the console for the results.
   Note: we don't have error handling in this program so be sure to write the correct values or things can go crazy.

## Exercise 3: Calculator

Okay, now it's time to program a proper, solid simple calculator in JavaScript. Below are the instructions. As always, you need an index.html and an index.js which must be connected.

1. Create a prompt that asks for a number of your choice. Store away in a variable.
2. Create another prompt that asks for another number. Save in a variable.
3. Create a third prompt that asks which calculation method the user wants to use. It should be noted that only +, -, \* and / are possible. This must also be saved in a variable.
4. Create an if-else-if check where you check the different options. For example. If the calculation method is equal to addition, then an addition should be performed between the two numbers and an alert should pop up and report the result. If it is subtraction that applies, subtraction must take place between the numbers and so on.
5. Include an else at the end that handles all outcomes, if, for example, the method of calculation is entered incorrectly so it is not recognized or similar.
   Feel free to add some nice alerts before and after that greet you and say goodbye and so on.
   ​

## Exercise 4: Functions

1. Greeting
   Create a function that greets you with "Hello there my friend!".

2. Greeting with name
   Create a function that takes a string as an argument and writes out: "Hello there my friend! You must be [name]!"

3. Addition
   Create a function that takes two numbers as arguments and returns the sum of those two numbers. Save that sum in a variable and log it to the console.

4. Division
   Create a function that takes two numbers as arguments and returns the quotient of those numbers. Save that to variable and log it to the console. Remember that you can't divide with zero. So a check must be than in order to prevent the calculation if you are trying to divide by zero. Log an error message to the console if that happens.

5. Area
   Create a function that takes a length and a width of an imaginary box as arguments and return the area of that box. Log a message to the console that describes the area of the box.

6. Greeting with name again
   Create a function that takes a first name and a last name as arguments. Return a template literals that says: "Hello [firstName] [lastName]! How are you doing?"

7. Distance converter
   Create a function that takes a distance in kilometres as an arguments and returns the distanse in miles. (The American kind of miles). Save to a variable and log a description of the conversion to the console.

8. Temperature converter
   Create a function that takes a celsius temperature as an argument and returns the temperature in farenheit. Log the result message to the console.

9. Mean value (Needs knowledge of Arrays)
   Create a function that takes an array of numbers as an argument. Return the mean value of all those numbers, save it and log it to the console.

10. Systembolaget
    Create a function that takes an age as an argument. Check the age and return one of the following messages.

    0 - 14 "Get out of here!"
    15 - 17: "Sorry, you are not old enough"
    18-19: "Sorry, you must be atleast 20. Why don't you try a bar instead?"
    20-80: "Thank you! Welcome!"
    80+ I'm sorry, where is your caretaker?

11. Sum (Needs knowledge of Arrays)
    Create a function that takes an array of 10 different numbers as an argument. Calculate the total sum of all the numbers in the array and return that value. Log it to the console.

12. List a persons' skills (Needs knowledge of Objects)
    Create an person object that has the following attributes: - name - age - city - skills

The skills attribute should be an array that contains strings of different skills, like: "Pokemon Master", "Kung Fu Legend", "Football Ninja" or any other skill. At least five of them.

Then create a function that takes the person as argument and lists all the skills of the person to the console.
