// Section C — Nested Conditions & Real-World Problems (35 Marks)
// Question 10: ATM Withdrawal System (10 Marks)
// Create an ATM withdrawal program.
// Initial Balance: Rs. 25,000
// Ask the user for:
// • PIN
// • Withdrawal amount
// Correct PIN: 1234
// Conditions:
// 1. Validate the PIN.
// 2. Withdrawal amount must be greater than zero.
// 3. Withdrawal amount must not exceed the available balance.
// 4. Withdrawal amount must be a multiple of Rs. 500.
// 5. If all conditions are satisfied, deduct the amount from the balance.

var initialBalance = 25000;
var pin = prompt("Enter your PIN:");
var withdrawalAmount = prompt("Enter the withdrawal amount:");

if (pin === "1234" && withdrawalAmount > 0 && withdrawalAmount <= initialBalance && withdrawalAmount % 500 === 0) {
    console.log("Withdrawal Successful!")
}else if (pin !== "1234") {
    console.log("Incorrect PIN. Please try again.");
}else {
    console.log("Invalid withdrawal amount. Try again.");
}

var remainingBalance = initialBalance - withdrawalAmount;

console.log("Withdrawn Amount: Rs. " + withdrawalAmount);
console.log("Remaining Balance: Rs. " + remainingBalance);