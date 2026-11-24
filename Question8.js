// Question 8: Leap Year Checker (5 Marks)
// Ask the user to enter a year.
// Determine whether it is a leap year.
// Rules:
// • A year divisible by 400 is a leap year.
// • A year divisible by 100 but not 400 is not a leap year.
// • Otherwise, a year divisible by 4 is a leap year.


var year = prompt("Enter a year:");

if (year % 400 === 0) {
    console.log(year + " is a leap year.");
} else if (year % 100 === 0) {
    console.log(year + " is not a leap year.");
} else if (year % 4 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}