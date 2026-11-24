// Section D — Problem-Solving Challenge (20 Marks)
// Question 14: Cinema Ticket Booking System (10 Marks)
// A cinema offers different ticket prices based on age.
// Age Group Ticket Price
// Below 5 years Free
// 5–12 years Rs. 300
// 13–59 years Rs. 700
// 60 years and above Rs. 400
// Additional Rules:
// • Weekend surcharge: Rs. 100 per paid ticket.
// • Children below 5 do not pay the surcharge.
// • Negative age is invalid.
// Ask the user for:
// • Age
// • Day type (weekday or weekend)
// Calculate and display the final ticket price.

var age = +prompt("Enter your age:");
var dayType = prompt("Enter the day type (weekday or weekend):").toLowerCase();

let ticketPrice;

if (age < 0) {
    console.log("Invalid age.");
} else if (age < 5) {
    ticketPrice = 0;
} else if (age >= 5 && age <= 12) {
    ticketPrice = 300;
} else if (age >= 13 && age <= 59) {
    ticketPrice = 700;
} else {
    ticketPrice = 400;
}

if (dayType === "weekend" && ticketPrice > 0) {
    surcharge = 100;
  }
var finalTicketPrice = ticketPrice + surcharge;

console.log("Base Ticket Price: Rs. " + ticketPrice);
console.log("Surcharge: Rs. " + surcharge);
console.log("Final ticket price: Rs. " + finalTicketPrice);