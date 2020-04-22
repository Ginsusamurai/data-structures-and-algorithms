'use strict';

const LL = require('./lib/ll.js');

let list = new LL();

// list.append('First of my kind');
// console.log('1', list);

// list.append('Second of my kind');
// console.log('2', list);

// list.append('3');

// list.toString();

// console.log(list.includes('3'));

// list.insert('HA!');

// list.toString();

// console.log(list.includes('HA!'));

// let nerp = new LL();

// console.log(nerp.includes('HA!'));

// nerp.insert(1);

// console.log(nerp.includes(2));


// list.append(0);
// list.append(1);
// list.append(2);
// list.append(3);
// console.log(list.toString());
// list.insertAfter(3,'dog');
// console.log(list.toString());

// list.append(0);
// list.append(1);
// list.append(2);
// list.append(3);
// console.log(list.toString());
// list.removeNode(2);
// console.log(list.toString());

list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
// console.log(list.toString());
console.log(list.kthFromEnd(8));
