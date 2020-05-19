'use strict';

function insertionSort(arr){
  if(!arr.length || (typeof arr !== 'object')) throw new Error('Invalid input');

  for(let i = 1; i < arr.length; i++){
    let j = i - 1;
    let temp = arr[i];

    while( j >= 0 && temp < arr[j]){
      arr[j + 1] = arr [j];
      j = j - 1;
    }
    arr[j + 1 ] = temp;
  }
  return arr;
}


let x = [8,4,23,42,16,15];
let y = [20,18,12,8,5,-2];
let q = [2,3,5,7,13,11];

// console.log(insertionSort(x));
// console.log(insertionSort(y));
// console.log(insertionSort(q));

let v = insertionSort(x);
console.log(v, typeof v);

module.exports = insertionSort;
