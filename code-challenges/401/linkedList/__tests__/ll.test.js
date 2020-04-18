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


});
