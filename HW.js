//area of a rectangle
function areaOfRectangle(length,width) 
{
  var area = length*width;
  var s = "The area of the rectangle is: "+area;
    console.log(s);
}


//celsius To fahrenheit
function celsiusToFahrenheit(cTemp) 
{
  var cToFahr = cTemp * 9 / 5 + 32;
  var degree = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(degree);
}

//fahrenheit To celsius
function fahrenheitToCelsius(fTemp) 
{
  var fToCel = (fTemp - 32) * 5 / 9;
  var degree = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(degree);
} 

//Numbers' summations
function summations(arr)
{
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
}


//Maximum number
function max(arr)
{
    let max=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>max)
            max=arr[i];
      }
      return max;
}

//Reverse Array
function reverse(arr)
{
    let arr2=[];
    for (let i = arr.length; i >= 0; i--) {
        arr2.push(arr[i]);
      }
      return arr2;
}


//stars pattern
function printStars(num)
{
  stars='';
  for (let i = 0; i<num; i++) {

    for(let j=0;j<=i;j++)
      stars+="*";
    
    stars+='\n';
  }
  return stars;


}



//Test
areaOfRectangle(5,4);
celsiusToFahrenheit(80);
fahrenheitToCelsius(40);
let Numbers = [23,54,32,87,47]
console.log("the sum of the array is: "+summations(Numbers));
console.log("the max number of the array is: "+max(Numbers));
console.log("the reverse array: "+reverse(Numbers));
console.log(printStars(5));