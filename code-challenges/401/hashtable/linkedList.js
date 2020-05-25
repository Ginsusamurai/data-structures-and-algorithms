'use strict';
const Node = require('./node.js');


class LL {
  constructor(){
    this.head = null;
  }

  // i am adding an array of [key,val] 
  add(keyVal){
    let node = new Node(keyVal);

    if(this.head === null){
      this.head = node; //head.next === null
    }else{
      let current = this.head;
      if(current.value[0] === keyVal[0]){
        throw new Error('No Duplicate Keys Allowed');
      }
      while(current.next !== null){
        current = current.next;
        if(current.value[0] === keyVal[0]){
          throw new Error('No Duplicate Keys Allowed');
        }
      }
      current.next = node;
    }
  }

  get(key) {
    if(this.head === null){
      return null;
    }else{
      let current = this.head;
      while(current !== null){
        if(current.value[0] === key){
          return current.value[1];
        }
        current = current.next;
      }
      return null;
    }
  }

  contains(key){
    if(this.head === null){
      return false;
    }else{
      let current = this.head;
      while(current !== null){
        if(current.value[0] === key){
          return true;
        }
        current = current.next;
      }
      return null;
    }
  }

}

module.exports = LL;

