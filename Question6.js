//Question 6: Student Grade Calculator (5 Marks)
//Ask the user to enter their percentage.

var percentage = prompt("Enter your percentage:");
if(percentage >= 90 && percentage <= 100){
    console.log("Your grade is A+.");
}else if(percentage >= 80 && percentage < 90){
    console.log("Your grade is A.");
}else if(percentage >= 70 && percentage < 80){
    console.log("Your grade is B.");
}else if(percentage >= 60 && percentage < 70){
    console.log("Your grade is C.");
}else if(percentage >= 50 && percentage < 60){
    console.log("Your grade is D.");
}else if(percentage >= 0 && percentage < 50){
    console.log("Failed.");
}else{
    console.log("Invalid percentage entered");
}