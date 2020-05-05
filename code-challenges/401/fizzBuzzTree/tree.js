'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor(value = null){
    this.root = value === null ? null : new Node(value);

  }
  add(value){
    const node = this.root;
    if(node === null){
      this.root = new Node(value);
      return;
    }else{
      const searchTree = function(node){
        if(value < node.value){
          if(node.left === null){
            node.left = new Node(value);
            return;
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if (value > node.value){
          if(node.right === null){
            node.right = new Node(value);
            return;
          }else if (node.right !== null){
            return searchTree(node.right);
          }
        }else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

module.exports = {bst: BST,};



