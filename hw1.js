

// 1-1

let length=2;
let width=4;
console.log(length * width)


// 1-2

function cToF(celsius) 
{
  var c = celsius;
  var cToFa = c * 9 / 5 + 32;
  var message = c+'\xB0C is ' + cToFa + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var f = fahrenheit;
  var fToCe = (f - 32) * 5 / 9;
  var message = f+'\xB0F is ' + fToCe + '\xB0C.';
    console.log(message);
} 
cToF(80);
fToC(50);



// 2 

const arr = [23 , 54 , 32 ,87 , 47];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// 3 

/*
const array = [16, 4, 2, 0, 19, 6 ];
const max = Math.max(...array);
console.log(max);
*/

var array = [16, 4, 2, 0, 19, 6]; 
var max = 0;

for( var i = 0; i < array.length; i++){
     if(max < array[i]) {
         max = array[i]; }
        } console.log(max);



// 4 

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3 = [];
for (let i = arr2.length - 1; i >= 0; i--) {
    arr3.push(arr2[i]);
}
console.log(arr3);

// 5 

let num = 5;
let string = "";
for (let i = 1; i <= num; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

