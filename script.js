//Calculate area of a rectangle

let length = 20;
let width = 10;
let area = length * width;
console.log("The area of the rectangle is:" + area);

//The Temperature Converter

let c = 30;
console.log(c + "\u00B0C is " + ((c * 1.8) + 32) + "\u00B0F")
let f = 86;
console.log(f + "\u00B0F is " + ((f - 32) * 5 / 9) + "\u00B0C")

//Numbers' summations
let numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

//Maximum number
let arr = [16, 4, 2, 0, 19, 6];
let max = -1
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max);
//Reverse Array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverse = [];
for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
}
console.log(reverse);

//stars pattern
let num = 5;
let star = "";
for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);