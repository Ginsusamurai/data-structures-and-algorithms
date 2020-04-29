'use strict';

const Shelter = require('../fifo_animal_shelter.js');


describe('shelter functionality', () => {
  it('should enqueu new cats and dogs', () => {
    let s = new Shelter();
    expect(s.front).toBeNull();
    expect(s.rear).toBeNull();
    s.enqueue('cat');
    expect(s.front.value).toEqual('cat');
    expect(s.rear.value).toEqual('cat');
    s.enqueue('dog');
    expect(s.rear.value).toEqual('dog');
  });

  it('should return a null if not a dog or cat', () => {
    let s = new Shelter();
    let temp = s.enqueue('varmit');
    expect(temp).toBeNull();
  });

  it('should dequeue() the first dog or cat found', () => {
    let s = new Shelter();
    s.enqueue('cat');
    s.enqueue('cat');
    s.enqueue('dog');
    expect(s.front.next.value).toEqual('cat');
    expect(s.rear.value).toEqual('dog');
    s.dequeue('dog');
    expect(s.rear.value).toEqual('cat');

    s = new Shelter();
    s.enqueue('cat');
    s.enqueue('cat');
    s.enqueue('dog');
    expect(s.front.next.value).toEqual('cat');
    expect(s.rear.value).toEqual('dog');
    s.dequeue('cat');
    expect(s.rear.value).toEqual('dog');
    expect(s.front.value).toEqual('cat');
    expect(s.front.next.value).toEqual('dog');

  });
});
