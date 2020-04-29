'use strict';

class Animal{
  constructor(type){
    this.value = type;
    this.next = null;
  }
}

class Shelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let ani = null;

    if(value === 'cat'){
      ani = new Animal('cat');
    }else if(value === 'dog'){
      ani = new Animal('dog');
    }else{
      return ani;
    }

    if(this.front === null){
      this.front = ani;
      this.rear = ani;
      ani.next = null;
    }else{
      this.rear.next = ani;
      this.rear = ani;
    }
  }

  dequeue(pref){
    console.log(pref);
    if(pref !== 'cat' && pref !== 'dog'){
      console.log('get outta here');
      return null;
    }
    let temp1 = this.front;
    let temp2 = null;

    if(temp1.value === pref){
      this.front = temp1.next;
    }

    // console.log('a',temp1);
    // console.log('b',temp2);

    while(temp1.next !== null){

      if(temp1.value === pref){
        break;
      }
      // console.log('loop');
      temp2 = temp1;
      temp1 = temp1.next;

      // console.log('a',temp1);
      // console.log('b',temp2);
    }

    if(temp2){
      temp2.next = temp1.next;
    }
    temp1.next = null;

    if(this.front.next === null){
      this.rear = this.front;
    }

    let cycler = this.front;
    while(cycler.next !== null){
      cycler = cycler.next;
    }
    this.rear = cycler;

    return temp1;


  }

}
module.exports = Shelter;
