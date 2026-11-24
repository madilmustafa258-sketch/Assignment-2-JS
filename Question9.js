// Question 9: Job Eligibility Checker (5 Marks)
// A company is hiring junior developers.
// Requirements:
// • Age must be between 18 and 30 (inclusive).
// • Minimum experience: 1 year.
// • JavaScript knowledge is required.
// Ask the user for:
// • Age
// • Years of experience
// • JavaScript knowledge (yes or no)

var age = prompt("Enter your age:");
var experience = prompt("Enter your years of experience:");
var jsKnowledge = prompt("Do you have JavaScript knowledge? (yes or no)");

if (age >= 18 && age <= 30 && experience >= 1 && jsKnowledge === "yes") {
    console.log("Congratulations! You are eligible to apply.");
} else {
    console.log("Sorry! You do not meet the requirements.");
}