
//H.W

//Q1 : Calculate area of a rectangle

let length=10;
let width =10;
let area=length*width;

console.log("The area of the rectangle is:"+area);

//Q2 : Convert it to fahrenheit and output "NN°C is NN°F".
//     Convert it to celsius and output "NN°F is NN°C."

let celsius = 30;
let fahrenheit = (celsius * 1.8) + 32;
console.log(celsius + "°C degree celsius is equal to " + fahrenheit + "°F degree fahrenheit.");

fahrenheit = 86;
celsius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit +"°F degree fahrenheit is equal to " + celsius + "°C degree celsius.");

//Q3 : Numbers' summations
//Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers

let Numbers = [23,54,32,87,47];
let result = 0;
for(let i=0 ; i<Numbers.length;i++){
    result+=Numbers[i];
}
console.log(result);

//Q4 : Maximum number
//Create an array of the following numbers [16,4,2,0,19,6]
//Loop through the array elements and print the maximum number of this list to the console.

console.log("Maximum number is "+Math.max(16,4,2,0,19,6));

//Q5 : Reverse Array
//Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
//print the array in a reverse order

let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log("The array in a reverse order is "+numbers.reverse(numbers));

//Q6 : Print a right angle triangle using stars to the console

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write('*');
    }
        document.write("<br/>");

    }


