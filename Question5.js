//Section B — Comparison & Logical Operators (25 Marks)
//Question 5: Login Authentication (5 Marks)
//Create a simple login system using fixed credentials.

var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

if(username === "admin" && password === "password123"){
    console.log("Login successful! Welcome, " + username + ".");
}else if(username !== "admin"   && password === "password123"){
    console.log("Incorrect username. Please try again.");
}else if(username === "admin" && password !== "password123"){
    console.log("Incorrect password. Please try again.");
}else if(username !== "admin" && password !== "password123"){
    console.log("Incorrect password and username. Please try again.");
}