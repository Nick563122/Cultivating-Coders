//This is all for beginer problem 1
let a = 'Hello';
let b = 'World';
function sayingHi(x,y) {
  return x + " " + y;
}
console.log(sayingHi(a,b));

//This code is for beginer problem 2

function print() {
   
   return "javascript"
  }
console.log(print('javascript'))

//This code is for beginer problem 3

function add(num1, num2) {
    let result = num1 + num2;

    return result;
  }
  console.log(add(2,2))
  console.log(add(10,20))

//This is now code for beginer problem 4
function add(num3, num4) {
    let result = num3 + num4;
 
    return result >= 0;
}
console.log(add(2,2))
console.log(add(-3, -5))

//This is now code for beginer problem 5
function add(str, str2) {
    let result = str + str2;
    return result
  }
console.log(add('Hello,', '<name>!'))

//This is now code for beginer problem 6
//For some reason this function effects all the previous problems
function add(num5, num6) {
    let result = num5 + num6 +1;
    result = result * 2;
    result = result - 3;
    result = result / 4;
    
    return result
  }
console.log(add(1,1))

//This is now code for intermediate problem 1
function divide(num7) {
  let result = num7 / 7;

  return result
}
console.log(divide(42))

// This is now code for intermediate problem 2
function twice(myStr) {
  let result = myStr
  result = myStr.repeat(2)
  
  return result
}
console.log(twice('car'))

//This is now code for intermediate problem 3
function multiple(myStr, myNum) {
  let result = myStr;
  result = myStr.repeat(myNum);
  
  return result
}
console.log(multiple('car', 5))

//This is now code for intermediate problem 4

function greeting(myStr2, myNum2) {
  let result = myStr2;
  result = `Hello ${myStr2} its been ${myNum2} days since last time`

  return result
}
console.log(greeting('name', 7))