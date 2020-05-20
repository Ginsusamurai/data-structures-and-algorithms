'use strict';

function mergeSort(arr){
  if(!arr.length || typeof arr !== 'object') throw new Error('Not Valid Input');

  let n = arr.length;
  if (n > 1){
    let mid = n/2;
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    Merge(left, right, arr);
    console.log(arr);
  }
}

function Merge(left, right, arr){
  let l = 0;
  let r = 0;
  let i = 0;

  while( l < left.length && r < right.length){
    if(left[l] <= right[r]){
      arr[i] = left[l];
      l++;
    }else{
      arr[i] = right[r];
      r++;
    }
    i++;
  }

  if (l === left.length){
    for(r; r < right.length; r++){
      arr[i] = right[r];
      i++;
    }
  }else{
    for(l; l < left.length; l++){
      arr[i] = left[l];
      i++;
    }
  }
}

let x = [8,4,23,42,16,15];
// let x = [1];

mergeSort(x);

module.exports = mergeSort;