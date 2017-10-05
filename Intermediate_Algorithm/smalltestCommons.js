/*
  Algorithm:
  1. Get the min and max of the array argument.
  2. Initialize the value of the least common multiple of the range (multiple) to max.
  3. Loop while the least common multiple is not found.
  4. In this loop, create another loop to iterate from min up to 1 less than max.
  5. In this inner loop, check if the remainder of multiple and the current number in the inner loop is not zero.
  6. If the remainder in step 5 is not zero, break out of the inner loop since the current value of multiple is not a multiple of the current number in the inner loop (i). Increment multiple by max so we can try a new multiple.
  7. If the remainder in step 5 is zero, check for the next iteration in the inner loop.
  8. If step 7 is true for all numbers in the range, then the current multiple is the common multiple for all numbers in the range. Return this multiple.
*/
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var multiple = max;
  var isCommon = false;

  while (true) {
    for (var i = min; i < max; i++) {
      if (multiple % i != 0) {
        isCommon = false;
        break;
      } else {
        isCommon = true;
      }
    }

    if (isCommon) {
      break;
    } else {
      multiple += max;
    }
  }

  return multiple;
}

// sample run
smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);