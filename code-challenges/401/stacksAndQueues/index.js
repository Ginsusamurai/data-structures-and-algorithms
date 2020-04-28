'use strict';

const Stack = require('./stack.js');
const Queue = require('./queue.js');
const PsuedoQueue = require('./psuedoQueue');


const stk = new Stack();
const qu = new Queue();
const pq = new PsuedoQueue();

// qu.enqueue(1);
// qu.enqueue(2);
// console.log(qu);
// qu.dequeue();
// console.log(qu);
// qu.dequeue();
// console.log(qu);

pq.enqueue(1);
pq.enqueue(2);
pq.enqueue(3);
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);





