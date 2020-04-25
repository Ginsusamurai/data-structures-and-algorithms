'use strict';

const Stack = require('../stack.js');

describe('stack tests', () => {
  it('can make an empty stack', () => {
    let s1 = new Stack();
    expect(s1).toEqual({ top: null, });
  });
  it('can push on to stack', () => {
    let s2 = new Stack();
    s2.push(1);
    expect(s2.top.value).toEqual(1);
  });
  it('can push multiple on to stack', () => {
    let s3 = new Stack();
    s3.push(1);
    s3.push(2);
    expect(s3.top.value).toEqual(2);
  });
  it('can pop off stack', () => {
    let s4 = new Stack();
    s4.push(1);
    s4.push(2);
    expect(s4.top.value).toEqual(2);
    s4.pop();
    expect(s4.top.value).toEqual(1);
  });
  it('can empty a stack via pop', () => {
    let s5 = new Stack();
    s5.push(1);
    s5.push(2);
    expect(s5.top).not.toBeNull();
    s5.pop();
    s5.pop();
    expect(s5.top).toBeNull();
  });
  it('can peek a stack', () => {
    let s6 = new Stack();
    s6.push(1);
    s6.push(2);
    expect(s6.peek()).toEqual(2);
  });
  it('calling pop/peek on empty stack throws exception', () => {
    let s7 = new Stack();
    const peeker = () => {
      s7.peek();
    };
    expect(peeker).toThrow(Error);
    expect(peeker).toThrowError('stack is empty');
    const empty = () => {
      s7.pop();
    };
    expect(empty).toThrow(Error);
    expect(empty).toThrowError('stack is empty');
  });
});

