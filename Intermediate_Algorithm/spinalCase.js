/*
  Algorithm:
  1. Match the following pattern:
     -> uppercase letter (zero or one), lowercase letters, non-alphabets (zero or more)
  2. For every match, do the following:
     -> convert the first char to lowercase, then concatenate with the lowercase letters and a hyphen
  3. Finally, strip the trailing hyphen using slice() before returning the transformed string.
*/
function spinalCase(str) {
  var re = /([A-Z]?)([a-z]+)([^A-Za-z]*)/g;
  
  function replaceMatch(match, p1, p2) {
    return p1.toLowerCase() + p2 + "-";
  }
  
  return str.replace(re, replaceMatch).slice(0, -1);
}

spinalCase('This Is Spinal Tap');