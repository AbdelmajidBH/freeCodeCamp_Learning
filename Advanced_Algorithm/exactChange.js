var coinsBillsObj = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

/*
 Function to round a decimal up to avoid unexpected results in computation involving floating points
 source: http://www.jacklmoore.com/notes/rounding-in-javascript/
 */
function round(val, decimal) {
  return Number(Math.round(val + 'e' + decimal) + 'e-' + decimal);  
}

/*
 Algorithm:
 1. Create an object of string referring to the coin/bill type as key and its actual value/amount as value (coinsBillsObj).
 2. Create a temporary array of arrays (tmpChangeArr) with the inner array having the elements ( elem 1) string equivalent of the coin/bill being represented starting from "PENNY" and ( elem 2) as zero (initially).
 3. Compute for change (changeVal).
 4. Computer for total cash-in-drawer (totalCid).
 5. Return "Insufficient Funds" if totalCid is less than changeVal (insufficient funds condition 1). Else, go to step 4.
 6. Return "Closed" if totalCid is equal to changeVal. Else, go to step 5.
 7. Traverse/loop the cid parameter array and do the following for each element (another array) starting from the last down to the first:
   - get the string that corresponds to the coin/bill it represents (coinsBillsStr)
   - use coinsBillsStr to refer to the actual value of the bill/coin in coinsBillsObj (coinsBillsVal)
   - create an inner loop and do the following given the conditions (1) changeVal is greater than coinsBillsVal and (2) the current amount for the curent cid element being looked at is greater than zero:
     - add coinsBillsVal to the value in the tmpChangeArr
     - subtract coinsBillsVal from the current cid element's amount
     - subtract coinsBillsVal from changeVal
 8. After the outer loop finishes running, check if changeVal is greater than zero (insufficient funds condition 2). If yes, return "Insufficient Funds".
 9. Return ONLY THE bills and coins that are not zero in tmpChangeArr.
 */
function checkCashRegister(price, cash, cid) {
  var changeVal = cash - price;
  var totalCid = 0;
  var coinsBillsStr = "";
  var coinsBillsVal = 0;
  var tmpChangeArr = [
                      ["PENNY", 0], 
                      ["NICKEL", 0],
                      ["DIME", 0],
                      ["QUARTER", 0],
                      ["ONE", 0],
                      ["FIVE", 0],
                      ["TEN", 0],
                      ["TWENTY", 0],
                      ["ONE HUNDRED", 0]
                     ];
  var changeArr = [];
  
  for (var i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  } 
  totalCid = round(totalCid, 2);
  
  if (totalCid < changeVal) {
    return "Insufficient Funds"; // insufficient funds condition 1
  } else if (totalCid == changeVal) {
    return "Closed";
  }
  
  for (i = cid.length - 1; i >= 0; i--) {
    coinsBillsStr = cid[i][0]; // e.g. the string "TWENTY" from cid[8][0]
    coinsBillsVal = coinsBillsObj[coinsBillsStr]; // e.g. if "TWENTY", then result is 20 in coinsBillsObj
    
    while (changeVal >= coinsBillsVal &&
           cid[i][1] > 0) {
      tmpChangeArr[i][1] += coinsBillsVal;
      cid[i][1] -= coinsBillsVal;
      changeVal -= coinsBillsVal;
      changeVal = round(changeVal, 2);
    }
  }
  
  // insufficient funds condition 2
  if (changeVal > 0) {
    return "Insufficient Funds";
  }

  // return only non-zero amounts in tmpChangeArr
  for (i = tmpChangeArr.length - 1; i >= 0; i--) {
    if (tmpChangeArr[i][1] > 0) {
      changeArr.push(tmpChangeArr[i]);
    }
  }
  
  return changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// sample run
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);