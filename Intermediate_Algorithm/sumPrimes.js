/*
  Algorithm:
  1. Loop from 2 to num to check for all prime numbers.
  2. If the current number is a prime number, add the current number in the sum.
     To check if the current number is a prime number, do the following:
     -> Loop from 2 (first prime num) up to 1 less than the current number.
     -> If the remainder of the argument (tmpNum) and the current num in the loop (i) is zero,    then it's not a prime number. Return false.
     -> If the loop has ended and no divisor (i) was found to get a non-zero remainder, return    true. The argument is a prime number. 
*/
function sumPrimes(num) {
  var sum = 0;

  function isPrime(tmpNum) {
    for (var i = 2; i < tmpNum; i++) {
      if (tmpNum % i == 0) {
        return false;
      }
    }

    return true;
  }

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
    sum += i;
    }
  }

  return sum;
}

// sample run
sumPrimes(10);
sumPrimes(977);