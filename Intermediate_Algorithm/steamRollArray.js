/*
  Algorithn:
  1. Iterate array argument.
  2. If the current element is an array, recurse the same function and pass the current element. Concat the result to retArr and store.
  3. If element is not an array, push the element to retArr.
*/
function steamrollArray(arr) {
  var retArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      retArr = retArr.concat(steamrollArray(arr[i]));
    } else {
      retArr.push(arr[i]);
    }
  }

  return retArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);