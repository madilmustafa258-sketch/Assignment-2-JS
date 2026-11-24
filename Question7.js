//Question 7: Discount Eligibility (5 Marks)
//A shopping store offers discounts based on the total purchase amount.

var totalAmount = prompt("Enter the total purchase amount:");
var discount = 0;

if (totalAmount >= 10000) {
  discount = 20;
} else if (totalAmount >= 5000 && totalAmount < 10000) {
  discount = 10;
} else if (totalAmount >= 2000 && totalAmount < 5000) {
  discount = 5;
} else if (totalAmount < 2000) {
  discount = 0;
} else {
  console.log("Invalid amount entered.");
}

var discountAmount = (totalAmount * discount) / 100;
var finalAmount = totalAmount - discountAmount;

console.log("Total Purchase Amount:" + totalAmount);
console.log("Discount Percentage: " + discount + "%");
console.log("Discount Amount: " + discountAmount);
console.log("Final Amount: " + finalAmount);