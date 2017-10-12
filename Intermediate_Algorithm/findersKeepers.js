/*
  Algorithm:
  1. Use filter to "filter" elements that return true when passed to func.
  2. Return the first array in the filtered array.
*/
function findElement(arr, func) {
  var tmpArr = arr.filter(function(elem) {
    return func(elem);
  });
  
  return tmpArr[0];
}

// sample run
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });