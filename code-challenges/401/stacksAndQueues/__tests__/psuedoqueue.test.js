'use strict';

const PsuedoQueue = require('../psuedoQueue.js');

describe('psuedoQueue functionality', () => {
  it('should add items to the front of the queue via stack methods',() => {
    let pq1 = new PsuedoQueue();
    pq1.enqueue(1);
    expect(pq1.stack1.top.value).toEqual(1);
    pq1.enqueue(2);
    expect(pq1.stack1.top.value).toEqual(1);
    pq1.enqueue(3);
    expect(pq1.stack1.top.value).toEqual(1);
  });

  it('should dequeue() items as FIFO', () => {
    let pq2 = new PsuedoQueue();
    pq2.enqueue(1);
    pq2.enqueue(2);
    pq2.enqueue(3);
    expect(pq2.dequeue()).toEqual(1);
    expect(pq2.dequeue()).toEqual(2);
    expect(pq2.dequeue()).toEqual(3);
  });

  it('should error if dequeue an empty psuedoqueu', () => {
    let pq3 = new PsuedoQueue();
    pq3.enqueue(1);
    pq3.dequeue();
    let fail = () => {
      pq3.dequeue();
    };
    expect(fail).toThrow();
    expect(fail).toThrowError('empty queue');
  })
});
