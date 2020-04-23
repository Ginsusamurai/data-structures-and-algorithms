'use strict';

const LL = require('./lib/ll.js').LinkedList;
const mergeLists = require('./lib/ll.js').mergeLists;

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

// list.append(0);
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// // console.log(list.toString());
// console.log(list.kthFromEnd(8));


let list1 = new LL();
list1.append(1);
list1.append(2);
list1.append(3);

let list2 = new LL();
list2.append(4);
list2.append(5);
list2.append(6);

// console.log(list1.toString());

let x = mergeLists(list1, list2);
console.log(`output`, x.toString());
