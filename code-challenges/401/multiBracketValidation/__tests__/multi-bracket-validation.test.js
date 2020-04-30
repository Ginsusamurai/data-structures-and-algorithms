'use strict';

const checker = require('../multi-bracket-validation.js');

describe('good path examples', () => {
  it('should return true',() => {
    expect(checker('{{{}}}')).toEqual(true);
    expect(checker('({[]})')).toEqual(true);
    expect(checker('{dog}')).toEqual(true);
  });
  it('shold return false', () => {
    expect(checker('((])')).toEqual(false);
    expect(checker('dog()]')).toEqual(false);
    expect(checker('(((()))))')).toEqual(false);
  });
  it('should handle edge cases', () => {
    expect(checker()).toEqual(false);
    expect(checker('P')).toEqual(false);
    expect(checker('[')).toEqual(false);
    expect(checker('}')).toEqual(false);
  });
});
