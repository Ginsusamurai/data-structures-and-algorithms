'use strict';

// const { PerformanceObserver, performance } = require('perf_hooks');


function arrayBinarySearch(arr,key){
  if(typeof key === 'string'){
    throw new Error ('invalid key type');
  }
  //establish inital benchmarks
  let L = 0;
  let R = arr.length - 1;
  do{
    let M = Math.floor((L + R) / 2);
    // console.log('l', L, 'r', R, 'M', M);
    if(arr[M] === key){
      return M;
    }else if(arr[M] > key){
      R = M - 1;
    }else if(arr[M] < key){
      L = M + 1;
    }
  }while(L <= R);
  return -1;
}

// make an array of sequential integers of any size, inclusive
// function makeArray(length){
//   let arr = [];
//   for(let x = 1; x <= length; x++){
//     arr.push(x);
//   }
//   return arr;
// }

// let onek = makeArray(1000);
// // console.log(onek);
// var t0 = performance.now();
// console.log(arrayBinarySearch(onek, 32));
// var t1 = performance.now();
// console.log(t1 - t0,' onek miliseconds');

// let tenk = makeArray(10000);
// // console.log(tenk);
// t0 = performance.now();
// console.log(arrayBinarySearch(tenk, 32));
// t1 = performance.now();
// console.log(t1 - t0,' tenk miliseconds');

// let thousandk = makeArray(100000);
// // console.log(thousandk);
// t0 = performance.now();
// console.log(arrayBinarySearch(thousandk, 32));
// t1 = performance.now();
// console.log(t1 - t0,' thousandk miliseconds');

// let manymore = makeArray(10000000);
// // console.log(manymore);
// t0 = performance.now();
// console.log(arrayBinarySearch(manymore, 32));
// t1 = performance.now();
// console.log(t1 - t0,' manymore miliseconds');


// console.log(arrayBinarySearch([1,2,3,4,5,6,7,8], 2));
// console.log(arrayBinarySearch([1,2,3,4,5,6,7,8], 7));
// console.log(arrayBinarySearch([1,2,3,4,5,6,7,8], 8));
// console.log(arrayBinarySearch([1,2,3,4,5,6,7], 6));

module.exports = arrayBinarySearch;
