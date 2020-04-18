'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor(){
    this.head = null;
  }

  // add node to end of list
  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return this;
  }

  // insert a node at head
  insert(value){

    if(this.head === null){
      return this.append(value);
    }else{
      let node = new Node(value);
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      // return this;
    }

  }

  // return bool of if the value is in the list
  includes(value){
    if(!this.head){
      return false;
    }

    // console.log(this.head, value);
    if(this.head.value && (this.head.value === value)){
      return true;
    }

    let currentNode = this.head;

    while(currentNode.next !== null){
      currentNode = currentNode.next;
      if(currentNode.value === value){
        return true;
      }
    }
    return false;
  }

  // print out a string of all the values in sequence
  toString(){
    if(!this.head){
      return 'NULL';
    }
    let currentNode = this.head;
    // console.log(currentNode);
    let outputString = '';
    while(currentNode.next !== null){
      outputString += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    outputString += `{${currentNode.value}} -> NULL`;
    return outputString;
  }

}

module.exports = LinkedList;
