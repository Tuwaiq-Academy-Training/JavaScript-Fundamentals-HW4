console.log("-----------------Ex1-----------------");

console.log("Calculate area of a rectangle")
let length=Number(prompt("Enter length:"));
let width=Number(prompt("Enter width:"));
console.log("The area of the rectangle is: "+(length*width));

console.log("-----------------Ex2-----------------");

console.log("The Temperature Converter");
let temperatureF = Number(prompt("Enter temperature in F:"));
console.log(`${temperatureF}°F is ${(temperatureF - 32) * 0.5556}°C`);
let temperatureC = Number(prompt("Enter temperature in C:"));
console.log(`${temperatureC}°C is ${temperatureC * 1.8 + 32}°F`);

console.log("-----------------Ex3-----------------");

console.log("Numbers' summations");
let arr = [23, 54, 32, 87, 47];
console.log(arr.reduce((sum,i)=>sum+i))

console.log("-----------------Ex4-----------------");

console.log("Maximum number");
arr = [16,4,2,0,19,6];
console.log(Math.max(...arr));

console.log("-----------------Ex5-----------------");

console.log("Reverse Array");
arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.reverse());

console.log("-----------------Ex6-----------------");

console.log("stars pattern");
let num =5;
for (let index = 1; index <= num; index++) {
    for (let j = 0; j < index; j++) {
        console.log("*");
    }
    console.log(" ")
}
