'use strict';

const insertionSort = require('../sort.js');

describe('sort tests', () => {
  it('can sort all positive sequence', () => {
    let array = [8,4,23,42,16,15];
    let x = insertionSort(array);
    expect(x).toEqual([4,8,15,16,23,42]);
  });
  it('can sort sequence with negative', () => {
    let array = [20,18,12,8,5,-2];
    expect(insertionSort(array)).toEqual([-2,5,8,12,18,20]);
  });
  it('can sort sequence with duplicates', () => {
    let array = [5,12,7,5,5,7];
    expect(insertionSort(array)).toEqual([5,5,5,7,7,12]);
  });
  it('can sort nearly complete sequence', () => {
    let array = [2,3,5,7,13,11];
    expect(insertionSort(array)).toEqual([2,3,5,7,11,13]);
  });

  it('throws errors with non-arrays', () => {
    let val = 1;
    let response1 = () => {
      insertionSort(val);
    };
    expect(response1).toThrow('Invalid input');
    let str = 'test';
    let response2 = () => {
      insertionSort(str);
    };
    expect(response2).toThrow('Invalid input');
    // expect(response).toEqual('Invalid input');
  });

});
