'use strict';

// use slice to break cut the initial array in half, concat
// the first half, an array with the val in it, then the second half
function insertShiftArray(arr, val){
  if(!Array.isArray(arr)){
    throw new Error('invalid first argument');
  }

  let len = arr.length;
  let arr1 = arr.slice(0, Math.floor(len / 2));
  let arr3 = arr.slice(Math.floor(len / 2));
  let arr2 = [val];
  return arr1.concat(arr2).concat(arr3);
}


// iterate over an array and push each val in to a temp array
// when the middle point is reached, push in the val, then continue to end
function insertShiftArrayTheHardWay(arr,val){
  if(!Array.isArray(arr)){
    throw new Error('invalid first argument');
  }

  let trigger = Math.floor(arr.length / 2);
  let tempArr = [];

  for(let i = 0; i < arr.length; i++){
    if(i === trigger){
      tempArr.push(val);
    }
    tempArr.push(arr[i]);
  }
  return tempArr;
}

module.exports = {simple: insertShiftArray, hard: insertShiftArrayTheHardWay};
