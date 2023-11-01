const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let accum = 0;
  array.forEach(num => accum += parseInt(num));
  return accum;
};

const multiply = function(array) {
  let accum = parseInt(array[0]);
  array = array.slice(1);
  array.forEach(num => accum *= parseInt(num));
  return accum;
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  accum = 1
  for (n = 2; n <= num; n++) {
    accum *= n;
  }
  return accum;
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
