// example 1:
//A variable needs to be available in the current context of execution. 
//Variables defined inside a function cannot be accessed from anywhere outside the function, 
//because the variable is defined only in the scope of the function
// function numbers() {
//     var num1 = 2,
//         num2 = 3;
//     return num1 + num2;
//   }
//   console.log(num1); //

//However, a function can access all variables and functions defined inside the scope 
//in which it is defined. 
//In other words, a function defined in the global scope can access all variables 
//defined in the global scope.
// var num1 = 2,
//     num2 = 3;
// function numbers() {
//   return num1 + num2;
// }
// console.log(numbers()); // 5

//example 2:
let x = 1;

function a() {       //...y and z are locked inside the a() and b() functions, so output() 
  let y = 2;         //can't access them when called from the global scope
//   output(y);      //until output() makes them accessible to a(); in the console
//    output(x);       //...output(x) works fine with a() and b() in the console because  
                   //even though the output() calls are not in the same scope as x is defined in, 
                    //x is a global variable so is available inside all code, everywhere   
    output(z);      //oh dear, this variable z, as y below, cannot reach the relevant variable!
}
function b() {
  let z = 3;
//   output(z);
//    output(x);
    output(y);
}



function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = 'Value: ' + value;
}