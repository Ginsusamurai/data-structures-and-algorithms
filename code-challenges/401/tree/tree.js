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

  contains(value){
    const node = this.root;
    if(node === null){
      return false;
    }else{
      const searchTree = function(node){
        if(value === node.value){
          return true;
        }else if(value < node.value){
          if(node.left === null){
            return false;
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if (value > node.value){
          if(node.right === null){
            return false;
          }else if (node.right !== null){
            return searchTree(node.right);
          }
        }else {
          return false;
        }
      };
      return searchTree(node);
    }
  }

  preOrder(){
    if(this.root === null) return null;
    const nodeList = [];
    const traverse = function(current){
      nodeList.push(current.value);

      if(current.left !== null){
        traverse(current.left);
      }

      if(current.right !== null){
        traverse(current.right);
      }

    };
    traverse(this.root);
    return nodeList;
  }

  inOrder(){
    if(this.root === null) return null;
    const nodeList = [];
    const traverse = function(current){

      if(current.left !== null){
        traverse(current.left);
      }

      nodeList.push(current.value);

      if(current.right !== null){
        traverse(current.right);
      }

    };
    traverse(this.root);
    return nodeList;
  }

  postOrder(){

    if(this.root === null) return null;
    const nodeList = [];
    const traverse = function(current){

      if(current.left !== null){
        traverse(current.left);
      }

      if(current.right !== null){
        traverse(current.right);
      }

      nodeList.push(current.value);
    };
    traverse(this.root);
    return nodeList;
  }

}

module.exports = {bst: BST,};





