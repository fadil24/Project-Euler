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
  let sum = 0, i = 1, fiboNum = [0, 1];
  do{
    i++;
    fiboNum[i] = fiboNum[i-1] + fiboNum[i-2];
    if(fiboNum[i]%2 == 0){
      sum += fiboNum[i];
    }
  }while(fiboNum[i] < n);
  return sum;
}
