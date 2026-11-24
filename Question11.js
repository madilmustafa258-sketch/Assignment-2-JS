// Question 11: Electricity Bill Calculator (10 Marks)
// An electricity company charges customers based on monthly consumption.
// Units Consumed Rate per Unit
// 0–100 Rs. 10
// 101–200 Rs. 15
// 201–300 Rs. 20
// Above 300 Rs. 25
// Billing Rule: Apply one rate to all units based on the total consumption bracket (not progressive slab
// billing).
// Ask the user to enter consumed units.
// Calculate:
// • Electricity charges
// • Fixed service charges: Rs. 150
// • Tax: 5% of electricity charges
// • Total payable bill

var unitsConsumed =+prompt("Enter the number of units consumed:");
if (isNaN(unitsConsumed) || unitsConsumed < 0) {
    console.log("Error: Please enter a valid non-negative number for units.");
} else {
    var ratePerUnit = 0;}

if (unitsConsumed <= 100) {
    var ratePerUnit = 10;
}else if (unitsConsumed <= 200) {
    var ratePerUnit = 15;
}else if (unitsConsumed <= 300) {
    var ratePerUnit = 20;
}else {
    var ratePerUnit = 25;
}

var electricityCharges = unitsConsumed * ratePerUnit;
var fixedServiceCharges = 150;
var tax = 0.05 * electricityCharges;
var totalPayableBill = electricityCharges + fixedServiceCharges + tax;

console.log("Electricity Charges: Rs. " + electricityCharges);
console.log("Fixed Service Charges: Rs. " + fixedServiceCharges);
console.log("Tax: Rs. " + tax);
console.log("Total Payable Bill: Rs. " + totalPayableBill);