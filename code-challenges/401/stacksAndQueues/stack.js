'use strict';

const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let item = new Node(value);
    // console.log('inner', this.top);
    if(this.top === null){
      this.top = item;
      item.next = null;
    }else{
      // console.log('hm', this.top.next);
      item.next = this.top;
      this.top = item;
    }

    // this.storage.push(item);
    // this.top = item;
  }

  pop(){

    if(this.isEmpty()){
      throw new Error('stack is empty');
    }
    let item = this.top;
    this.top = item.next;

    item.next = null;
    return item.value;
    // this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    // return item.value;
  }

  peek(){
    if(this.isEmpty()){
      throw new Error('stack is empty');
    }

    return this.top.value;
    // return this.top.value;
  }

  isEmpty(){
    return this.top === null;
    // return this.storage.length === 0;
  }
}

module.exports = Stack;
