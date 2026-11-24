// Question 15: Employee Salary & Bonus System (10 Marks)
// A company calculates employee bonuses based on years of service.
// Years of Service Bonus
// Less than 1 year No bonus
// 1–3 years 5%
// More than 3 years 10%
// More than 5 years 15%
// Additional Rules:
// • Employees with a salary of Rs. 100,000 or above pay 5% tax on their basic salary.
// • Other employees pay 2% tax on their basic salary.
// • Final salary = Basic Salary + Bonus - Tax.
// • Salary and years of service cannot be negative.
// Ask the user for:
// • Basic salary
// • Years of service

var basicSalary = +prompt("Enter your basic salary:");
var yearsOfService = +prompt("Enter your years of service:");

var bonusPercentage;

if (yearsOfService < 1) {
    bonusPercentage = 0;
} else if (yearsOfService >= 1 && yearsOfService <= 3) {
    bonusPercentage = 5;
} else if (yearsOfService > 3 && yearsOfService <= 5) {
    bonusPercentage = 10;
} else {
    bonusPercentage = 15;
}

var bonus = (basicSalary * bonusPercentage) / 100;

var taxPercentage;

if (basicSalary >= 100000) {
    taxPercentage = 5;
} else {
    taxPercentage = 2;
}

var tax = (basicSalary * taxPercentage) / 100;

var finalSalary = basicSalary + bonus - tax;

console.log("Final salary: Rs. " + finalSalary);