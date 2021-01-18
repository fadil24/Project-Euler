// Problem 1
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let sum = 0, i = 3;
  while( i < number){
    if(i%3 === 0 || i%5 === 0) sum += i; 
    i++;
  }
  return sum;
}
