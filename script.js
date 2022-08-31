//Q1:calculate area of rectangle 
console.log("question (1) is :\n")

let length=5
let width=8
let area=(length*width)
console.log("the area of rectangle of length "+length+" and width "+width+" is "+area)


//Q2:conver temp to cel and feh 
console.log("question (2) is :\n")
let cTemp = 5;
let cToFahr = cTemp * 9 / 5 + 32;
let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log("convert the celcius to fehran hight : "+message)
let fTemp=cToFahr
fToCel = (fTemp - 32) * 5 / 9;
mmessage = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
      console.log("convert the fehran to celcius hight : "+mmessage);

//q3:print the loop 
console.log("question (3) is :\n")
let Numbers = [23,54,32,87,47]
console.log("the arrays element ",...Numbers);

//q4: Create an array of the following numbers [16,4,2,0,19,6]
console.log("question (4) is :\n")
let arr=[16,4,2,0,19,6]
console.log(...arr)

//q5: Loop through the array elements and print the maximum number of this list to the console.

console.log("question (5) is :\n")
console.log(" the maximum number of the previous array is : "+[Math.max(...arr)])

//q6:Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]

let arr1=[1,2,3,4,5,6,7,8,9,10].reverse()
console.log("question (6) is :\n")
console.log("print the array in reverse ",...arr1);

//q7:stars pattren 
console.log("question (7) is :\n")

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string)










