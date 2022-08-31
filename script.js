//#1

let length=3;
let width=4;
let area=(length*width)/2;
console.log("The area of the triangle is: "+area)


//#2

let c=40;
console.log(c+"°C"+" is "+(c*1.8+32)+"°F");
let f=90;
console.log(f+"°F"+" is "+((f-32)/0.5556)+"°C");

//#3

let Numbers = [23,54,32,87,47]
let sum= 0;
for(let i=0;i<Numbers.length;i++){
sum=sum+Numbers[i];
}
console.log("The sum of the numbers is:"+sum);

//#4
;
let arr1=[16,4,2,0,19,6];
console.log("The biggest number is:"+ Math.max(...arr1));

//#5

let arr2= [1,2,3,4,5,6,7,8,9,10]
arr2.reverse();
console.log("The array in reverse is: "+arr2);


//#6
console.log("right angle triangle:");

let n = 5;
for(var i=1; i<=n; i++){
    console.log(" ".repeat(n-i)+"*".repeat(i));
 }
