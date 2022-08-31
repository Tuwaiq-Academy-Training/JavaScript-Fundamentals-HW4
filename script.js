// Calculate area of a rectangle:
let lengthRectangle = 100;
let widthRectangle = 60;
let area = lengthRectangle * widthRectangle;
console.log("The area of the rectangle is "+ area);


// The Temperature Converter:
let celsiusTemperature = 30;
let ceToFa = celsiusTemperature * 9 / 5 + 32;
let messageCe = celsiusTemperature+'\xB0C is ' + ceToFa + ' \xB0F.';
    console.log(messageCe);


let fahrenheitTemperature = 86;
let faToCe = (fahrenheitTemperature - 32) * 5 / 9;
let messageFa = fahrenheitTemperature+'\xB0F is ' + faToCe + ' \xB0C.';
    console.log(messageFa);


//Numbers' summations
    let Numbers = [23,54,32,87,47];
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
      sum = sum + Numbers[i];
    }
    console.log(sum);

//Maximum number
    let arr = [16,4,2,0,19,6];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1] ) {
          if ( arr[i] > max ){
          }
                max = arr[i];
        }
      }  
    console.log(max)


//Reverse Array
    let array = [1,2,3,4,5,6,7,8,9,10];

    for (let i = array.length-1; i >= 0; i--) {
      console.log(array[i])
      
    }


//Nested for loop
    let variable = 5;
    let string = "";
    for (let i = 1; i <= variable; i++) {
      for (let a = 0; a < variable - i; a++) {
        string += "";
      }
      for (let b = 0; b < i; b++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
