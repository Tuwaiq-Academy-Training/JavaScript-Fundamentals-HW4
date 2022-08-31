//Calculate area of a rectangle//

let length=3;
let width =4;
let result=length*width;
console.log("The area of the rectangle is: ", result)

//The Temperature Converter//
let C = Number(prompt("Enter temperature in C:"));
var cToFahr = C * 9 / 5 + 32;
  var message = C+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
    let F = Number(prompt("Enter temperature in F:"));
    var fToCel = (F - 32) * 5 / 9;
    var message = F+'\xB0F is ' + fToCel + '\xB0C.';
      console.log(message);
//Numbers' summations//
let Numbers = [23,54,32,87,47];
let sum=0;
for(let i=0; i<Numbers.length ; i++){
     sum = sum + Numbers[i];
}
console.log("the sum of all numbers is",sum);
//Maximum number//
let array=[16,4,2,0,19,6];
var largest = array[0] || null;
var number = null;
for (var i = 0; i < array.length; i++) {
    number = array[i];
    largest = Math.max(largest, number);
}
console.log("he maximum number of this list is",largest);
//Reverse Array//
let reverseArray =[1,2,3,4,5,6,7,8,9,10];
console.log("Array before reserved");
for(let i = 0; i < reverseArray.length; i++){
    console.log(reverseArray[i]);
  }
const reversed = reverseArray.reverse();
console.log('Array after reserved:', reversed);

//stars pattern//
let starts =5;
for(let i=1; i<=starts;i++) {
    console.log("*".repeat(i))
}



