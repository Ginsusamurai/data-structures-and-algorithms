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


});
