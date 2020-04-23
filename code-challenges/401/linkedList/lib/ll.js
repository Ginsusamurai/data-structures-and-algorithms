'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor(){
    this.head = null;
  }

  // add a new node with `newVal` before the first
  // node that matches the `value`
  // how-to: find the node.next.val that matches
  // save copy of current node to a _temp
  // set the current.next to value of new node made
  // set the new node next to _temp
  insertBefore(value, newVal){

    if(this.includes(value)){

      let newNode = new Node(newVal);

      let currentNode = this.head;
      while(currentNode.next.value !== value){
        currentNode = currentNode.next;
      }
      let holderNext = currentNode.next;
      currentNode.next = newNode;
      newNode.next = holderNext;
    }else{
      throw new Error('Value not in list');
    }

  }

  kthFromEnd(k){
    let length = 0;
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
      length++;
    }

    // console.log(this);
    if (k > length){
      throw new Error('k is longer than list');
    }
    if(k < 0 || isNaN(k) || k.length){
      throw new Error('k is invalid, must be a positive integer');
    }

    let target = length - k;
    let steps = 0;
    currentNode = this.head;
    // console.log(currentNode);
    while(steps < target ){
      steps++;
      currentNode = currentNode.next;
    }
    return currentNode.value;

  }

  midwayPoint(){
    let length = 0;
    let currentNode = this.head;

    if (!currentNode ){
      throw new Error('Empty List');
    }

    while(currentNode.next !== null){
      currentNode = currentNode.next;
      length++;
    }



    let target = Math.floor(length / 2);

    let steps = 0;
    currentNode = this.head;
    // console.log(currentNode);
    while(steps < target ){
      steps++;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }


  // remove a node with the matching value from the list
  removeNode(value){
    if(this.includes(value)){

      let currentNode = this.head;
      while(currentNode.next.value !== value){
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }else{
      throw new Error('Value not in list');
    }
  }


  // add a new node with the given `newVal`
  // after the first node that matches `value`
  insertAfter(value, newVal){

    if(this.includes(value)){

      let newNode = new Node(newVal);
      let currentNode = this.head;
      while(currentNode.value !== value){
        currentNode = currentNode.next;
      }
      let holderNext = currentNode.next;
      currentNode.next = newNode;
      newNode.next = holderNext;
    }else{
      throw new Error('Value not in list');
    }
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


function mergeLists(l1, l2){
  
  
  let list1Current = l1.head;
  let list2Current = l2.head;
  let list1Next = new Node();
  let list2Next = new Node();

  // console.log(first, second);

  while (list1Current !== null || list2Current !== null){
    
    
    

    
    list1Next = list1Current.next; //a
    list2Next = list2Current.next; //b

    list1Current.next = list2Current; //c
    list2Current.next = list1Next;  //d

    list1Current = list1Next;  //e
    list2Current = list2Next;  //f
  }

  console.log(l1);

  return l1;
}

module.exports = {LinkedList, mergeLists};
