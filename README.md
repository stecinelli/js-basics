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
