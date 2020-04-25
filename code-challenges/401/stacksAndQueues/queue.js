'use strict';

const Node = require('./node.js');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let item = new Node(value);
    if(this.front === null){
      this.front = item;
      this.rear = item;
      item.next = null;
    }else{
      this.rear.next = item;
      this.rear = item;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      throw new Error('queue is empty');
    }

    let temp = this.front;
    this.front = temp.next;
    temp.next = null;

    if(this.front === null){
      this.rear = null;
    }

    return temp.value;

  }

  peek(){
    if(this.isEmpty()){
      throw new Error('queue is empty');
    }
    return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }

}

module.exports = Queue;
