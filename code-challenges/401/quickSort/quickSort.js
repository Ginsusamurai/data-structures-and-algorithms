'use strict'

function quickSort(arr, left, right){
  if (left < right){
    // console.log('yes');
    let position = Partition(arr, left, right);

    quickSort(arr, left, position - 1 );
    quickSort(arr, position + 1, right);
  }
  // console.log(arr);
  return arr;
}

function Partition(arr, left, right){
  let pivot = arr[Math.floor((right + left) /2)];

  let low = left;
  let high = right;

  while (left <= high){
    while(arr[left] < pivot){
      left++;
    }
    while(arr[high] > pivot){
      high--;
    }

    if(left <= high){
      Swap(arr,left, high);
    }

    return left;
  }  
}


function Swap(arr, first, last){
  let temp = arr[first];
  arr[first] = arr[last];
  arr[first] = temp;
}


// let x = [8,4,23,42,16,15];

// console.log(quickSort(x, 0, x.length - 1));
