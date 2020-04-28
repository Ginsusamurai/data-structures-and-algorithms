'use strict';

const Stack = require('./stack.js');


class PsuedoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    while(!this.stack1.isEmpty()){
      this.stack2.push(this.stack1.top.value);
      this.stack1.pop();
    }

    this.stack1.push(value);
    while(!this.stack2.isEmpty()){
      this.stack1.push(this.stack2.top.value);
      this.stack2.pop();
    }
  }

  dequeue(){

    if(this.stack1.isEmpty()){
      throw new Error('empty queue');
    }
    return this.stack1.pop();

  }
}

module.exports = PsuedoQueue;
