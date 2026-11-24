//Section A — Basic Conditions (20 Marks)
//Question 1: Positive, Negative or Zero (5 Marks)
//Write a JavaScript program that takes a number from the user and determines whether it is:
//• Positive
//• Negative
//• Zero

var number = prompt("Enter a number:");
if (number > 0) {
    console.log(number + " is a Positive number.");
} else if (number < 0) {
    console.log(number + " is a Negative number.");
} else {
    console.log(number + " is a Zero.");
}