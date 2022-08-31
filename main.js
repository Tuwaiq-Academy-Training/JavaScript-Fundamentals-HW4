// Calculate area of a rectangle

let lengthRectangle = 100;
let widthRectangle = 100;
console.log("The area of the rectangle is: "+ lengthRectangle * widthRectangle);


// The Temperature Converter
let celsius = 36
console.log(celsius+" °C is "+ celsius * 1.8 + 32 +" °F");
let fahrenheit  = celsius * 1.8 + 32;
console.log(fahrenheit+"°F is "+ celsius +"°C ");


// Numbers' summations
let Numbers = [23,54,32,87,47] 
let sum=0
for (let index = 0; index < Numbers.length; index++) {
    sum+=Numbers[index]
    
}
console.log(sum);


// Maximum number
let arr=[16,4,2,0,19,6]
max=arr[0]
for (let index = 0; index < arr.length; index++) {
    if (max<arr[index]) {
        max = arr[index]
    }
    
}
console.log(max);


// Reverse Array
let arr2=[1,2,3,4,5,6,7,8,9,10]
for (let index = arr2.length-1; index >= 0; index--) {
    console.log(arr2[index]);
    
}


// stars pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
