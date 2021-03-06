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

/* 
* Problem 3
* Find largest prime factor
* @param {number} number - number that needed to be find its lergest prime factor
* return {number} - largest prime factor
*/ 
function largestPrimeFactor(number) {
  let prime = 2, largestPrime = 0;
  while(prime <= number){
    if(number % prime == 0){
      number /= prime;
      largestPrime = prime;

      /* if current prime cant divide the number, 
      *  then next number which is not prime won't, 
      *  until next another prime to be checked.
      *  this is will be repeated until the number equal to one
      */ 
    }else{ prime++; }
  }
  return largestPrime;
}
/* Problem 4
 * find the largest palindrome product i.e. n = 3, return = 906609, product from 993*913 
 * @param {number} n - a number of digits
 * return {number} - largest palindrome 
 */
function largestPalindromeProduct(n) {
  let factor = parseInt('9'.repeat(n));
  let max = Math.pow(factor, 2);
  /* create palindrome base on maximum 3 numbers squared
   * change (patt)ern by (red)uce it with number but only one side
   */
  let patt = max.toString().slice(0,n);
  const createPalindrome = function(patt, red = 0){
    patt = parseInt(patt) - red;
    patt = patt.toString()
    patt = patt + patt.split('').reverse().join('');
    return parseInt(patt);
  }
  for(let r=0; r<100; r++){
    let pal = createPalindrome(patt, r)
    console.log(pal)
    for(let m=factor; m>Math.sqrt(pal); m--){
      if(pal%m == 0){
        return pal;
      }
    }
  }
}
