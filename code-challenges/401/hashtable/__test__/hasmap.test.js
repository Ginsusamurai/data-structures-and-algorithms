'use strict';

const Hashmap = require('../hashtable');

describe('a series of hash map/table ideal tests', () => {

  
  it('can add a value to a map', () => {
    let hashery = new Hashmap();
    hashery.set('test', 'val');
    expect(hashery.contains('test')).toEqual(true);
  });

  it('will get the value of a key out of the table', () => {
    let hashery = new Hashmap();
    hashery.set('test','value');
    let x = hashery.get('test');
    expect(x).toEqual('value');

  });
  
  it('will return null if key does not exist', () => {
    let hashery = new Hashmap();
    expect(hashery.get('nothing')).toEqual(null);
  });

  it('can add multiple items to the same index', () => {
    let hashery = new Hashmap();
    hashery.set('dog', 'cat');
    hashery.set('god', 'tac');
    expect(hashery.contains('dog')).toEqual(true);
    expect(hashery.contains('god')).toEqual(true);
  });

  it('has a default size of 1024', () => {
    let hashery = new Hashmap();
    expect(hashery.size).toEqual(1024);
  });

  it('has a user defined size', () => {
    let size = 12;
    let hashery = new Hashmap(size);
    expect(hashery.size).toEqual(size);
  });

  it('will reject a duplicate key', () => {
    let hashery = new Hashmap();
    hashery.set('test', 'val');
    // hashery.set('test', 'val1');
    let backTalk = () => {
      hashery.set('test','anotherVal');
    };
    // console.log(hashery);
    // console.log('b', backTalk);
    expect(backTalk).toThrow();
  });

  

});
