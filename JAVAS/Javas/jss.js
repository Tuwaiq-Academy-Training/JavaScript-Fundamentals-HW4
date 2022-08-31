//Q1

let length=50;
 let width=100;
 let rectangle =length*width
 console.log("The area of the rectangle is",rectangle)


 //Q2

 //sum
let numbers = [23,54,32,87,47]
let  sum = 0;
for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i]
    } 
    console.log(sum);


    //Maximum number

 let  arr = [16,4,2,0,19,6];
console.log("Maximum number",Math.max(...arr))


//Reverse Array
            let numbers_array  = [23,54,32,87,47];
  
            console.log("Original Array: ");
            console.log(numbers_array);
          
            numbers_array.reverse();
          
            console.log("Reversed Array: ");
            console.log(numbers_array);



             //stars pattern

            let n = 5;
              let string = "";
            for (let i = 1; i <= n; i++) {
                 for (let j = 0; j < i; j++) {
                        string += "*";
                        }
                          string += "\n";
                             }
                      console.log(string);