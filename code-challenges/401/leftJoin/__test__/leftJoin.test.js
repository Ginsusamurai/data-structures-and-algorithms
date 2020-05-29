'use strict';

const leftJoin = require('../left-join');
const Hashmap = require('../../hashtable/hashtable.js');

describe('leftjoin tests', () => {
  let left = new Hashmap(12);
  left.set('big','large');
  left.set('hungry','famished');
  left.set('tiny', 'small');

  let right = new Hashmap(12);
  right.set('big', 'tiny');
  right.set('hungry', 'sated');
  right.set('weak', 'strong');

  it('should left join 2 hashmaps', () => {
    expect(leftJoin(left, right)).toEqual([
      [ 'hungry', 'famished', 'sated' ],
      [ 'big', 'large', 'tiny' ],
      [ 'tiny', 'small', null ]
    ]);
  });

  it('should error if bad inputs', () => {
    let a = 1;
    let b = ['dog'];

    let x = () =>{
      leftJoin(a, right);
    };
    let y = () =>{
      leftJoin(left, b);
    };
    expect(x).toThrow();
    expect(y).toThrow();
  });

  it('should have have exactly as many outputs as values in left table', () => {
    let count = 0;
    for(let i = 0; i < left.storage.length; i++){
      if(left.storage[i] !== undefined){
        count++;
      }
    }
    expect(leftJoin(left,right).length).toEqual(count);
  });
});
