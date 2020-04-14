'use strict';

const arrayShiftOptions = require('../array-shift');


describe('golden route', () => {
  let insertArrayShift = arrayShiftOptions.simple;
  it('pass valid data in to insertShiftArray', () => {
    expect(insertArrayShift([1,2,3],5)).toEqual([1,5,2,3]);
    expect(insertArrayShift([1,2,3,4],5)).toEqual([1,2,5,3,4]);
  });
  let insertShiftArrayTheHardWay = arrayShiftOptions.hard;
  it('pass valid data in to insertShiftArrayTheHardWay', () => {
    expect(insertShiftArrayTheHardWay([1,2,3],5)).toEqual([1,5,2,3]);
    expect(insertShiftArrayTheHardWay([1,2,3,4],5)).toEqual([1,2,5,3,4]);

  });
});

describe('these tests are edge cases', () => {
  let insertArrayShift = arrayShiftOptions.simple;
  it('pass INvalid data in to insertShiftArray', () => {
    expect(() => {
      insertArrayShift('dog','new');
    }).toThrowError('invalid first argument');
  });
});

describe('these tests are edge cases', () => {
  let insertShiftArrayTheHardWay = arrayShiftOptions.hard;
  it('pass INvalid data in to insertShiftArray', () => {
    expect(() => {
      insertShiftArrayTheHardWay('dog','new');
    }).toThrowError('invalid first argument');
  });
});


