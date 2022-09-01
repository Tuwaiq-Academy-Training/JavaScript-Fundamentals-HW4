
//Q1
// Area of rectangle = Length x Breadth

let Length = 20
let Breadth = 30
let Area = Number(Length * Breadth)

console.log("Length = "+Length+" Breadth = "+Breadth)
console.log("The area of the rectangle is: " + Area)


/////////////////////////////////////////////////////////

//Q2
// Celsius to Fahrenheit Conversion Formula :  (....°C x 1.8) + 32 = ...°F
// Fahrenheit to Celsius Conversion Formula :  (....°F - 32) x 1.8 = ...°C

let Celsius = 22
let Celsius_To_Fahrenheit = (Celsius * 1.8) + 32
console.log(Celsius+" °C is "+ Celsius_To_Fahrenheit +" °F ")

let Fahrenheit = 98.6
let Fahrenheit_To_Celsius = (Fahrenheit- 32) / 1.8

console.log(Fahrenheit+" °F is "+ Fahrenheit_To_Celsius +" °C ")



/////////////////////////////////////////////////////////


//Q3

let Numbers = [23,54,32,87,47]
let sum = 0;

for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
}
console.log(sum);




/////////////////////////////////////////////////////////


//Q4

let arr = [16,4,2,0,19,6]
const max = Math.max(...arr)
console.log(max)



/////////////////////////////////////////////////////////


//Q5

let numbersReverse = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersReverse.reverse())


/////////////////////////////////////////////////////////


//Q6


let numOfprint = 5
let string = "";

for (let i = 1; i <= numOfprint; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);