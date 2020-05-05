'use strict';

const BST = require('../tree.js').bst;

const fbt = require('../fizz-buzz-tree.js');



describe('fizz buzz tree Clean tests', () => {

  it('should return null if no node', () => {
    let bst = new BST();
    expect(fbt(bst.root)).toBeNull();
  });

  it('should make a copy', () => {
    let bst = new BST();
    bst.add(2);
    bst.add(1);
    bst.add(4);
    let x = fbt(bst.root);
    expect(x.value).toStrictEqual('2');
    expect(x.right.value).toStrictEqual('4');
    expect(x.left.value).toStrictEqual('1');
  });

  it('should replace %3 and %5 and (%3 & %5)', () =>{
    let bst = new BST();
    bst.add(10);
    bst.add(6);
    bst.add(15);
    let x = fbt(bst.root);
    expect(x.value).toStrictEqual('Buzz');
    expect(x.right.value).toStrictEqual('FizzBuzz');
    expect(x.left.value).toStrictEqual('Fizz');
  });
});
