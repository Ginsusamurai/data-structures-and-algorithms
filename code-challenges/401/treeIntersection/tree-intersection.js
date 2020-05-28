'use strict';

const BST = require('../tree/tree.js').bst;


function treeIntersection(tree1, tree2){

  if(tree1.root === null || tree2.root === null) return null;

  let sameVals = [];

  const traverse2 = function(oak, ash){

    if(oak.root === null || ash.root === null) return null;

    if(oak.left !== null && ash.left !== null){
      traverse2(oak.left, ash.left);
    }

    if(oak.value === ash.value){
      sameVals[sameVals.length] = oak.value;
    }

    if(oak.right !== null && ash.right !== null){
      traverse2(oak.right, ash.right);
    }
  };

  traverse2(tree1.root, tree2.root);
  return sameVals;

}

let x = new BST();

x.add(4);
x.add(3);
x.add(7);
x.add(1);


let y = new BST();

y.add(4);
y.add(3);
y.add(7);
y.add(5);

// console.log(x);
// console.log(y);

let q = treeIntersection(x, y);
console.log(q);

module.exports = treeIntersection;
