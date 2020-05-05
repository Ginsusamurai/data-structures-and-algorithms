'use strict';

const BST = require('./tree.js').bst;

let bst = new BST();

class Node {
  constructor(val){
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

function fizzBuzzTree(root){

  if(root === null) return null;
  let newNode = new Node('');
  if (root.value % 3 === 0) newNode.value += 'Fizz';
  if (root.value % 5 === 0) newNode.value += 'Buzz';
  if (newNode.value === '') newNode.value = `${root.value}`;
  newNode.left = fizzBuzzTree(root.left);
  newNode.right = fizzBuzzTree(root.right);
  return newNode;

}

// bst.add(10);
// bst.add(11);
// bst.add(7);
// bst.add(3);
// bst.add(5);
// bst.add(12);
// bst.add(15);

// let x = fizzBuzzTree(bst.root);

// console.log('root', x, bst.root);
// console.log('root right',x.right, bst.root.right);
// console.log('root right right', x.right.right, bst.root.right.right);

// bst.add(2);
// bst.add(1);
// bst.add(4);

// let x = fizzBuzzTree(bst.root);
// console.log(x);


module.exports = fizzBuzzTree;
