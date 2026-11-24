//Question 4: Find the Largest Number (5 Marks)
//Take three numbers from the user and find the largest number using conditional statements.

var number1=prompt("Enter a number1:");
var number2=prompt("Enter a number2:");
var number3=prompt("Enter a number3:");

if(number1 >= number2 && number1 >= number3){
    console.log(number1 + " is the largest number.");
}else if(number2 >= number1 && number2 >= number3){
    console.log(number2 + " is the largest number.");
}else if(number3 >= number1 && number3 >= number2){
    console.log(number3 + " is the largest number.");
}