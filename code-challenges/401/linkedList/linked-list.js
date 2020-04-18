'use strict';

const LL = require('./lib/ll.js');

let list = new LL();

list.append('First of my kind');
console.log('1', list);

list.append('Second of my kind');
console.log('2', list);

list.append('3');

list.toString();

console.log(list.includes('3'));

list.insert('HA!');

list.toString();

console.log(list.includes('HA!'));

let nerp = new LL();

console.log(nerp.includes('HA!'));

nerp.insert(1);

console.log(nerp.includes(2));

