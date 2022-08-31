// Q1
// Calculate area of a rectangle
// Store the length of rectangle.
// Store the width of rectangle.
// Calculate the area and print the output "The area of the rectangle is: NN"

let length=10
let width =20
let area=length*width
console.log("The area of the rectangle is: ",area)

//Q2
// The Temperature Converter
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celsius = 45
let Fahrenheit = celsius * 1.8 + 32
console.log(celsius ,"C"," is ",Fahrenheit ,"F")
let fahrenheit=58
let  Celsius=  (fahrenheit - 32) * 5/9
console.log(fahrenheit ,"F"," is ",Celsius ,"C")

//Q3
// Numbers' summations
// Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers

let Numbers = [23,54,32,87,47]
let sum =0
for(let i = 0 ; i<Numbers.length; i++){
   sum= Numbers[i]+sum 
}
console.log("sum of all numbers is :", sum)

//Q4
// Maximum number
// Create an array of the following numbers [16,4,2,0,19,6]
// Loop through the array elements and print the maximum number of this list to the console.

let numbers =[16,4,2,0,19,6]
let big = 0
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>big){
        big = numbers[i]
    }
}
console.log("maximum number is : ", big)

//Q5
// Reverse Array
// Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
// print the array in a reverse order
let number= [1,2,3,4,5,6,7,8,9,10]
let reversed_array= []
for ( let i = number.length-1; i>=0;i--){
    reversed_array.push(number[i])
}
console.log(reversed_array)

//Q6
// Nested for loop
// stars pattern
// Declare a variable and assign a number to it.
// Print a right angle triangle using stars to the console. Example: if the variable is 5, the printed pattern will be as follow:
// *
// **
// ***
// ****
// *****

let num= 5
let lin = " "
for (let i =0 ;i< num ; i++){
    for (let j = 0 ; j<i ;j++){
        lin += "*"
   
 }
 console.log(lin ,"\n")
}
