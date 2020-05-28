'use strict';

const BST = require('../../tree/tree.js').bst;
const treeI = require('../tree-intersection.js');

describe('tree intersection tests', () => {
  let a = new BST();
  let b = new BST();

  b.add(4);
  b.add(3);
  b.add(7);
  b.add(1);

  a.add(4);
  a.add(3);
  a.add(7);
  a.add(5);

  let c = new BST();
  c.add(1);
  c.add(6);
  c.add(3);
  c.add(4);

  let d = new BST();

  it('should find similar values', () => {
    expect(treeI(a,b)).toEqual([ 3, 4, 7 ]);
  });

  it('should not return anything if the structures mismatch', () => {
    expect(treeI(a,c)).toEqual([]);
  });

  it('should return null if either tree provided has no root',() => {
    expect(treeI(a,d)).toEqual(null);
    expect(treeI(d,a)).toEqual(null);
  });

});
