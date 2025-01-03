const add = function(var1, var2) {
  let sum = var1 + var2; 
  return sum;

	
};

const subtract = function(var1, var2) {
	let sum = var1 - var2;
  return sum;
};

const sum = function(arr) {
  let sum = 0;
  if (arr.length < 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
	
};

const multiply = function(arr) {
  let product = 1;  
  for (let i = 0; i < arr.length; i++) {  
    product *= arr[i];
  }
  return product;
};

const power = function(val, exp) {
  let sum= val ** exp;
  return sum;
	
};

const factorial = function(int) {
  if (int <= 1) {
    return 1;
} else {
    return int * factorial(int - 1);
}
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};