/*
 Function is used to find the index of the delivered item in inventory
 Return:
   0 based index if found; -1 if delivered item is not in inventory
 */
function findInvItem(item, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] == item) {
      return i;
    }
  }
  
  return -1;
}

/*
 Algorithm/approach:
 1. Loop through delivered items (arr2) and do the following:
   - look up delivered item in inventory (arr1)
   - if item is found in inventory, add delivery item count to the corresponding inventory count
   - if not found, push the delivered item to arr1
 2. Return the updated inventory in alphabetical order
 */
function updateInventory(arr1, arr2) {
  var itemInvIndex = -1;
  
  for (var i = 0; i < arr2.length; i++) {
    itemInvIndex = findInvItem(arr2[i][1], arr1);
    
    if (itemInvIndex != -1) {
      // update arr1
      arr1[itemInvIndex][0] += arr2[i][0];
    } else {
      // add item to arr1
      arr1.push(arr2[i]);
    }
  }
  
  // sort the updated inventory in alphabetical order
  arr1.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    }
    
    return 0;
  });
  
  console.log(arr1);
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// sample run
updateInventory(curInv, newInv);
