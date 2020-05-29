'use strict';

const LL = require('./linkedList.js');

class Hashmap {
  constructor(size){
    this.size = size || 1024;
    this.storage = new Array(size);
  }

  hash(key){
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    },0) * 19 % this.size;
  }

  set(key, val){
    let hash = this.hash(key);
    if(!this.storage[hash]){
      let ll = new LL();
      ll.add([key,val]);
      this.storage[hash] = ll;
    }else{
      this.storage[hash].add([key,val]);
    }
  }

  get(key){
    let hash = this.hash(key);
    if(!this.storage[hash]){
      return null;
    }else{
      return this.storage[hash].get(key);
    }
  }

  contains(key){
    let hash = this.hash(key);
    if(this.storage[hash] === null){
      return null;
    }else{
      // return this.storage[hash].contains(key);
      return true;
    }
  }
}


module.exports = Hashmap;




