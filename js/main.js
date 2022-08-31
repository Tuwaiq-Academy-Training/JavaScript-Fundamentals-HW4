/*q1*/
let len=4;
let wid=5;
console.log("the area of rectangle is",len*wid);
//___________________________________________________________
/*q2*/
let cel=4;
let fah=cel*(9/5)+32
console.log(fah,"f is",cel,"c")
let fah2=32;
let cel2=(fah2-32)*5/9
console.log(fah2,"f is",cel2,"c")
//___________________________________________________________
/*q3*/
let num3=[23,54,32,87,47];
let sum=0;
for(let i=0;i<num3.length;i++){
sum+=num3[i];
}
console.log(sum);
//___________________________________________________________
/*q4*/
let num4=[16,4,2,0,19,6];
console.log(Math.max(...num4))
//___________________________________________________________
/*q5*/
let num5=[1,2,3,4,5,6,7,8,9,10]
console.log(num5.reverse());
//___________________________________________________________
/*q6*/
let num6=5
for(let i=0;i<num6;i++){
for(let j=0;j<=i;j++){
    console.log("*")
}
console.log("\n")
}