'use strict';

const arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
let arr3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
let oops = null;
let undef = undefined;
let word = 'balloon';


function reverseArray(arr) {
  if(arr === null ||
    arr === undefined ||
    !Array.isArray(arr)){
    return `Error, ${arr} is a(n) invalid argument`;
  }

  let _temp = [];

  for(let i = arr.length; i > 0; i--){
    _temp.push(arr[i - 1 ]);
  }

  return _temp;
}

function reverseArrayV2(arr){
  if(arr === null ||
    arr === undefined ||
    !Array.isArray(arr)){
    return `Error, ${arr} is a(n) invalid argument`;
  }

  let _temp = [];
  return arr.reverse();
}

console.log(arr1, reverseArray(arr1));
console.log(arr2, reverseArray(arr2));
console.log(arr3, reverseArray(arr3));
console.log(oops, reverseArray(oops));
console.log(undef, reverseArray(undef));
console.log(word, reverseArray(word));

console.log(arr1, reverseArrayV2(arr1));
console.log(arr2);
console.log(reverseArrayV2(arr2));
console.log(arr3);
console.log(reverseArrayV2(arr3));
console.log(oops);
console.log(reverseArrayV2(oops));
console.log(undef);
console.log(reverseArrayV2(undef));
console.log(word);
console.log(reverseArrayV2(word));

console.log('1', arr1);
console.log('2', arr1.reverse());
let x = arr1.reverse();
console.log('3', x);


