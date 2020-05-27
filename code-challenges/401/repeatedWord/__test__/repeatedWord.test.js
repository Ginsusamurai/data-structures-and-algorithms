'use strict';

const repeat = require('../repeated-word');


describe ('repeated word text', () => {

  it('should return "a" for this string', () => {
    let a = "Once upon a time, there was a brave princess who...";
    expect(repeat(a)).toEqual('a');
  });

  it('should notify if no matches found', () => {
    let z = 'The quick brown fox jumped over a lazy dog';
    expect(repeat(z)).toEqual('No repeated words');
  });

  it('should error if not a string', () => {
    let num = () => {
      repeat(5);
    };
    let obj = () => {
      repeat({a:'dog'});
    };
    let arr = () => {
      repeat(['dogs','are','dogs']);
    };
    expect(num).toThrow('invalid input, must be string type');
    expect(obj).toThrow('invalid input, must be string type');
    expect(arr).toThrow('invalid input, must be string type');
  });

});