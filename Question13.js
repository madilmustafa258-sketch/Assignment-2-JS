// Question 13: Traffic Signal System (5 Marks)
// Ask the user to enter a traffic signal color.
// Conditions:
// • Red -> Stop
// • Yellow -> Get Ready
// • Green -> Go
// • Any other input -> Invalid Signal
// The program should accept both uppercase and lowercase inputs.

var signalColor = prompt("Enter a traffic signal color (Red, Yellow, Green):").toLowerCase();

if (signalColor === "red"){
    console.log("Stop");
}else if (signalColor === "yellow"){
    console.log("Get Ready");
}else if (signalColor === "green"){
    console.log("Go");
}else{
    console.log("Invalid Signal");
}