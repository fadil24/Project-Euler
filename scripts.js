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

// Problem 2
// Considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
function fiboEvenSum(n) {
  let sum=0, num1=0, num2=1, num3=0;
  while(num3 < n){
    num3 = num2 + num1;
    num1 = num2;
    num2 = num3;
    if(num3%2 == 0){
      sum+=num3;
    }
  }
  return sum;
}
