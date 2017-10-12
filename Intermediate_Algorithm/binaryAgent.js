/*
  Algorithm:
  1. Split the str into array of binary strings.
  2. Loop the array to iterate each binary string.
  3. For every binary string, check for bits that are on (1).
  4. For every bit that is on, add its decimal equivalent (starting from 128, divide by 2 before the next iteration ) to codeChar. The accumulated value is the Unicode we need.
  5. Convert the Unicode to a single char string and concat it to the return string.
*/
function binaryAgent(str) {
  var binArr = str.split(" "),
      arrLen = binArr.length,
      retStr = "";

  for (var i = 0; i < arrLen; i++) {
    var bitVal = 128, 
        charCode = 0,
        binLen = binArr[i].length; // or 8

    for (var j = 0; j < binLen; j++) {
      if (binArr[i][j] == "1") {
        charCode += bitVal;
      }

      bitVal /= 2;
    }

     retStr += String.fromCharCode(charCode);
  }

  return retStr;
}

//sample run
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");