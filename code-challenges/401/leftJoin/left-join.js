'use strict';

// const Hashmap = require('../hashtable/hashtable.js');

function leftJoin(table1, table2){

  if(!table1.storage && !table2.storage) throw new Error('Invalid Input');

  let output = [];

  for(let i = 0; i < table1.storage.length; i++){
    if(table1.storage[i] !== undefined){

      // get key and val at each index
      let key = table1.storage[i].head.value[0];
      let val = table1.storage[i].head.value[1];
      // add key/val to output hash
      output[output.length] = [key,val];

      // check other table
      if(table2.contains(key)){
        // pull out val from that table
        let val2 = table2.get(key);
        // spread and append at index
        output[output.length - 1 ] = [...output[output.length - 1 ], val2];
      }
    }
  }

  return output;
}




// let left = new Hashmap(12);
// left.set('big','large');
// left.set('hungry','famished');
// left.set('tiny', 'small');

// let right = new Hashmap(12);
// right.set('big', 'tiny');
// right.set('hungry', 'sated');
// right.set('weak', 'strong');

// console.log(leftJoin(left,right));
// console.log(left);


module.exports = leftJoin;
