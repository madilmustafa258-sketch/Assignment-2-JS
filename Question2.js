//Question 2: Even or Odd Number (5 Marks)
//Ask the user to enter an integer and determine whether it is even or odd using the modulus operator.

var number = prompt("Enter an integer:");
if (number % 2 === 0) {
    console.log(number + " is an Even number.");
} else {
    console.log(number + " is an Odd number.");
}