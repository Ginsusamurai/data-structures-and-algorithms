'use strict';

const arrayBinarySearch = require('../array-binary-search');

describe('Some good old fashioned passing data here', () =>{
  it('should find these values in the array', () => {
    expect(arrayBinarySearch([1,2,3,4,5],1)).toEqual(0);
    expect(arrayBinarySearch([1,2,3,4,5],5)).toEqual(4);
  });

  it('should return -1 for these values', () => {
    expect(arrayBinarySearch([1,2,3,4,5],7)).toEqual(-1);
    expect(arrayBinarySearch([1,2,4,5],3)).toEqual(-1);


  });
});
