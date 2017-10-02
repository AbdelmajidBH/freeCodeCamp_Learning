/*
  Algorithm:
  1. Initialize sum = 1 + 1 (first two numbers in the Fibonacci sequence).
  2. Inside a loop, set curNum to the sum of the last two numbers in the sequence.
  3. Inside the same loop, check if curNum is odd.
  4. If curNum is odd, add its value to sum if curNum is less than or equal to num (argument).
  5. If curNum is greater than num, break out of the loop. Return accumulated sum of odd numbers in the sequence.
  6. If curNum is less than or equal to num, set prevNum1 = prevNum2, prevNum2 = curNum.
  7. Repeat steps 2 to 7 until curNum is greater than num.
*/
function sumFibs(num) {
  var prevNum1 = 1,
      prevNum2 = 1,
      sum = prevNum1 + prevNum2,
      curNum;
  
  while (true) {
    curNum = prevNum1 + prevNum2;
    if (curNum % 2 != 0) {
      if (curNum <= num) {
        sum += curNum;
      } else {
        break;
      }
    }
    
    prevNum1 = prevNum2;
    prevNum2 = curNum;    
  }
  
  return sum;
}

sumFibs(4);