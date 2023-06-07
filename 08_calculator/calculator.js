const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((total,item) => total+item, 0);
};

const multiply = function(a) {
  return a.length 
    ? a.reduce((product,item) => product*item, 1)
    : 0 ;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n==0){
    return 1;
  }else{
    return n*factorial(n-1);
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
