'use strict';

const BST = require('../tree').bst;
const Node = require('../tree.js').node;

describe('bst test', () => {

  it('Can successfully instantiate an empty treee', () => {
    let bst = new BST();
    expect(bst.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let bst = new BST(4);
    expect(bst.root.value).toEqual(4);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let bst = new BST(2);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    expect(bst.preOrder()).toEqual([2,1,3]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let bst = new BST(2);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    expect(bst.inOrder()).toEqual([1,2,3]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let bst = new BST(2);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    expect(bst.postOrder()).toEqual([1,3,2]);
  });


  it('should add a node', () => {
    let bst = new BST();
    bst.add(1);
    expect(bst).toEqual({"root": {"left": null, "right": null, "value": 1}});
  });

  it('should add lower nodes to the left', () => {
    let bst = new BST();
    bst.add(2);
    bst.add(1);
    expect(bst.root.left.value).toEqual(1);

  });

  it('should add lower nodes to the left', () => {
    let bst = new BST();
    bst.add(2);
    bst.add(3);
    expect(bst.root.right.value).toEqual(3);
  });

  it('should be able to add multiple nodes in the proper order', () => {
    let bst = new BST();
    bst.add(4);
    bst.add(6);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    bst.add(5);
    bst.add(7);
    expect(bst.root.left.left.value).toEqual(1);
    expect(bst.root.right.right.value).toEqual(7);
  });

  it('can show if tree contains a value', () => {
    let bst = new BST();
    bst.add(4);
    bst.add(6);
    bst.add(2);
    expect(bst.contains(4)).toEqual(true);
    expect(bst.contains(6)).toEqual(true);
    expect(bst.contains(7)).toEqual(false);
  })

});

describe('breadth first', () => {
  it('will return null if no root', () => {
    let bst = new BST();
    expect(bst.breadthFirst()).toBeNull();
  });

  it('will return in level order on balanced tree', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(1);
    bst.add(6);
    expect(bst.breadthFirst()).toEqual([ 5, 3, 7, 1, 6 ]);
  });

  it('will return in level order on unbalanced tree', () => {
    let bst = new BST();
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node('dog');
    bst.root = a;
    bst.root.right = b;
    bst.root.right.right = c;
    bst.root.right.right.right = d;
    expect(bst.breadthFirst()).toEqual([1, 2, 3, 'dog']);
  });
});
