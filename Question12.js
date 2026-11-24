// Question 12: Student Result System (10 Marks)
// Ask the user to enter marks for five subjects:
// • English
// • Mathematics
// • Science
// • Computer
// • Urdu
// Each subject has a maximum of 100 marks.
// Requirements:
// 1. Calculate total obtained marks.
// 2. Calculate percentage.
// 3. Determine grade using the grading criteria from Question 6.
// 4. A student must score at least 40 marks in every subject to pass.
// 5. If any subject has marks below 40, the overall result must be Fail, regardless of percentage.
// 6. Reject marks below 0 or above 100.
//not use arry

var englishMarks = +prompt("Enter marks for English (0-100):");
var mathematicsMarks = +prompt("Enter marks for Mathematics (0-100):");
var scienceMarks = +prompt("Enter marks for Science (0-100):");
var computerMarks = +prompt("Enter marks for Computer (0-100):");
var urduMarks = +prompt("Enter marks for Urdu (0-100):");

var totalObtainedMarks = englishMarks + mathematicsMarks + scienceMarks + computerMarks + urduMarks;
var totalMarks = 500;
var percentage = (totalObtainedMarks / 500) * 100;

var grade = "";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

if  (englishMarks < 0 || englishMarks > 100 || mathematicsMarks < 0 || mathematicsMarks > 100 || scienceMarks < 0 || scienceMarks > 100 || computerMarks < 0 || computerMarks > 100 || urduMarks < 0 || urduMarks > 100) {
    console.log("Error: Please enter valid marks between 0 and 100 for all subjects.");
}

var result = "";
    if (englishMarks < 40 || mathematicsMarks < 40 || scienceMarks < 40 || computerMarks < 40 || urduMarks < 40) {
        result = "FAIL";
        grade = "Fail";
    } else {
        result = "PASS";
    }

console.log("Total Marks: " + totalMarks);
console.log("Total Obtained Marks: " + totalObtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Overall Result: " + result);