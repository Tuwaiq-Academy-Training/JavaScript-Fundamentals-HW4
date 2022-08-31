//  qusthion 1

 let lenght=5;
 let width=2;
 let area_of_a_rectangle=lenght*width;
 console.log("Area of a rectangle=", area_of_a_rectangle);


// qustion 2 pert1

let celsius1 = 10 , fahrenheit1 = 0; 
fahrenheit1 = (celsius1 * 1.8) + 32;
console.log("the celsius" ,celsius1 ,"is" ,fahrenheit1,"fahrenheit");
   
// qustion 2 pert2

let celsius2 = 0 , fahrenheit2 = 10; 
celsius2 = ((fahrenheit2-32)*5)/9  
console.log("the fahrenheit" ,fahrenheit2 ,"is" ,celsius2,"celsius");

// qustion 3

let Numbers = [23,54,32,87,47];
let sum=0;
for (let i=0; i<=4;i++) {
    sum=sum+Numbers[i];
}
console.log("summations is",sum);

// qustion 4

let arr=[16,4,2,0,19,6];

let maxNumber=(Math.max(...arr));

console.log("the Maximum number is", maxNumber);

// qustion 5

let array= [1,2,3,4,5,6,7,8,9,10];

for(i=array.length-1;i>=0;i--){
console.log(array[i]);
}

// qustion 6

let numberValue = 5;
for(let i=1; i<=numberValue; i++){
    let s="";
  for(let j=1; j<=i; j++){
    s=s+" *";
  }
  console.log(s);
}




