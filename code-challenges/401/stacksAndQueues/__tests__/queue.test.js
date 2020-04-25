'use strict';

const Queue = require('../queue.js');


describe('queue tests', () => {
  it('can make an empty queue', () => {
    let q1 = new Queue();
    expect(q1).toEqual({ front: null, rear: null, });
  });
  it('can enqueue', () => {
    let q2 = new Queue();
    q2.enqueue(1);
    expect(q2.front.value).toEqual(1);
    expect(q2.rear.value).toEqual(1);
  });
  it('can enqueue multiple', () => {
    let q3 = new Queue();
    q3.enqueue(1);
    q3.enqueue(2);
    expect(q3.front.value).toEqual(1);
    expect(q3.rear.value).toEqual(2);
  });
  it('can dequeue', () => {
    let q4 = new Queue();
    q4.enqueue(1);
    q4.enqueue(2);
    expect(q4.front.value).toEqual(1);
    expect(q4.dequeue()).toEqual(1);
    expect(q4.front.value).toEqual(2);
    expect(q4.rear.value).toEqual(2);
  });
  it('can peek at queue', () => {
    let q5 = new Queue();
    q5.enqueue(1);
    q5.enqueue(2);
    expect(q5.peek()).toEqual(1);
  });
  it('empty a queue via dequeue', () => {
    let q6 = new Queue();
    q6.enqueue(1);
    q6.enqueue(2);
    expect(q6.peek()).toEqual(1);
    q6.dequeue();
    q6.dequeue();
    expect(q6.front).toBeNull();
    expect(q6.rear).toBeNull();
  });
  it('peek/dequeue on empty throws error', () => {
    let q7 = new Queue();
    q7.enqueue(1);
    q7.dequeue();
    const dropout = () => {
      q7.dequeue();
    };
    expect(dropout).toThrow(Error);
    expect(dropout).toThrowError('queue is empty');
    const peeker = () => {
      q7.peek();
    };
    expect(peeker).toThrow(Error);
    expect(peeker).toThrowError('queue is empty');
  });
});
