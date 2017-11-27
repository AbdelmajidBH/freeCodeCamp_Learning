/*
  Algorithm:
  1. Create an inner function which compares two arrays and returns the unique elements on both sides.
  2. Initialize sym's return array to the value of the first argument (arguments[0]).
  3. Loop the arguments starting at index 1, and apply the inner function.
     Use sym's return array as the first parameter, and the current element in this loop as the second parameter.
  4. Store the result of the inner function to sym's return array.
  5. Sort the return array ascendingly.
  6. Finally, return only the unique elements.
 */
function sym(arg) {
  var retArr = arguments[0];

  function filterPair(curArr, cmpArr) {
    var tmpArr = [],
        tmpRet = [];

    for (var i = 0; i < 2; i++) {
      tmpArr = curArr.filter(function(cur) {
        return cmpArr.indexOf(cur) === -1;
      });
      tmpRet = tmpRet.concat(tmpArr);

      /* 
        assign curArr to cmpArr, assign cmpArr to curArr
        use a temporary variable to make this possible
       */      
      tmpArr = curArr;
      curArr = cmpArr;
      cmpArr = tmpArr;
    }	

    return tmpRet;
  }

  for (var i = 1; i < arguments.length; i++) {
    retArr = filterPair(retArr, arguments[i]);
  }

  retArr.sort(function(a, b) {
    return a - b;
  });

  return [...new Set(retArr)];
}

// sample run
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
