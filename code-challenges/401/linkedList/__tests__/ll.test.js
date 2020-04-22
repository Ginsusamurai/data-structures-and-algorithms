'use strict';

const LL = require('../lib/ll.js');

describe('Linked List module', () => {
  it('constructor should create a list', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('should add an item to the list - append', () => {
    let list = new LL();

    let first = 'first item in list';
    list.append(first);

    expect(list.head.value).toEqual(first);

    let second = 'second item in list';
    list.append(second);

    expect(list.head.value).toEqual(first);
  });

  it('should prepend a new item to the list - insert', () => {
    let list = new LL();
    let first = 'first item in list';
    list.insert(first);
    expect(list.head.value).toEqual(first);
    let zero = 'zero item in list';
    list.insert(zero);
    expect(list.head.value).toEqual(zero);
  });

  it('should see if a value exists in the list - includes', () => {
    let list = new LL();
    let first = 'first item in list';
    let second = 'second item in list';
    let findThis = 'finders-keeprs';
    expect(list.includes('test')).toBe(false);
    list.append(first);
    list.append(second);
    list.append(findThis);
    expect(list.includes(findThis)).toBe(true);
    expect(list.includes(first)).toBe(true);
    expect(list.includes('I am not a value')).toBe(false);
  });

  it('should print to return a string of all the node values - toString', () => {
    let list = new LL();
    let first = 'first item in list';
    let second = 'second item in list';
    let findThis = 'finders-keeprs';
    expect(list.toString()).toBe('NULL');
    list.append(first);
    list.append(second);
    list.append(findThis);
    expect(list.toString()).toEqual(`{${first}} -> {${second}} -> {${findThis}} -> NULL`);
  });

  it('should have the proper value if i call list.head', () => {
    let list = new LL();
    let first = 'first item in list';
    let second = 'second item in list';
    let findThis = 'finders-keeprs';
    list.append(first);
    list.append(second);
    list.append(findThis);
    expect(list.head.value).toEqual(first);
    list.insert('test');
    expect(list.head.value).toEqual('test');
  });

  it('should insert a node before the called instance with `insertBefore`', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(2,'dog');
    expect(list.toString()).toEqual('{0} -> {1} -> {dog} -> {2} -> {3} -> NULL');
  });

  it('should insert a node before the called instance with `insertAfter`', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(2,'dog');
    expect(list.toString()).toEqual('{0} -> {1} -> {2} -> {dog} -> {3} -> NULL');
  });

  it('should remove a node if the `val` matches - removeNode', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeNode(2);
    expect(list.toString()).toEqual('{0} -> {1} -> {3} -> NULL');
  });
});

describe('Exceptions errors', () => {
  it('will throw an exception if value not in list - insertBefore', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    const anError = () =>{
      list.insertBefore(4,'dog');
    };
    expect(anError).toThrow('Value not in list');
  });

  it('will throw an exception if value not in list - insertAfter', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    const anError = () =>{
      list.insertAfter(4,'dog');
    };
    expect(anError).toThrow('Value not in list');
  });

  it('will throw an exception if value not in list - removeNode', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    const anError = () =>{
      list.removeNode(5);
    };
    expect(anError).toThrow('Value not in list');
  });

  it('will return the value of the linked list kthFromEnd()', () =>{
    let list = new LL();
    list.append(0);
    expect(list.kthFromEnd(0)).toEqual(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.kthFromEnd(2)).toEqual(3);
    expect(list.kthFromEnd(0)).toEqual(5);
    expect(list.kthFromEnd(5)).toEqual(0);
  });

  it('will throw an exception if K is longer than list - kthFromEnd()', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    const anError = () =>{
      list.kthFromEnd(5);
    };
    expect(anError).toThrow('k is longer than list');
  });

  it('will throw an exception if K not positive integer - kthFromEnd()', () => {
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    const numberCheck = () =>{
      list.kthFromEnd('dog');
    };
    expect(numberCheck).toThrow('k is invalid, must be a positive integer');
    const negNum = () =>{
      list.kthFromEnd(-1);
    };
    expect(negNum).toThrow('k is invalid, must be a positive integer');
    const arrCheck = () =>{
      list.kthFromEnd([1]);
    };
    expect(arrCheck).toThrow('k is invalid, must be a positive integer');
    const objCheck = () =>{
      list.kthFromEnd({'int':1});
    };
    expect(objCheck).toThrow('k is invalid, must be a positive integer');
  });

  it('will throw an exception if list is empty - midwayPoint()', () => {
    let list = new LL();
    const anError = () =>{
      list.midwayPoint(5);
    };
    expect(anError).toThrow('Empty List');
  });

  it('will return the value of the midway point of the linked list', () =>{
    let list = new LL();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.midwayPoint()).toEqual(1);
    list.append(4);
    expect(list.midwayPoint()).toEqual(2);
  });
  
});
