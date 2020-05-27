'use strict';

function repeatedWord(story){

  if(typeof story !== 'string'){
    throw new Error('invalid input, must be string type');
  }

  class Node{
    constructor(val){
      this.value = val;
      this.next = null;
    }
  }

  class LL{
    constructor(){
      this.head = null;
    }

    add(val){
      let newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
      }else{
        let currentNode = this.head;
        // console.log('word', val, 'val', currentNode.value);
        if(currentNode.value === val){
          // console.log('BOO!');
          return val;
        }
        while(currentNode.next !== null){
          if(currentNode.value === val){
            // console.log('BOO!');
            return val;
          }
          currentNode = currentNode.next;
        }

      }
      return false;
    }

  }

  class Hashmap{
    constructor(){
      this.size = 1024;
      this.storage = new Array(this.size);
    }

    hash(word){
      // console.log('?', word);
      return word.split('').reduce((acc, cur)=> {
        return acc + cur.charCodeAt(0);
      }, 0) * 19 % this.size;
    }

    set(word){
      // console.log('set', word);
      let hash = this.hash(word);
      if(!this.storage[hash]){
        let ll = new LL();
        ll.add(word);
        this.storage[hash] = ll;
      }else{
        return this.storage[hash].add(word);
      }
    }
  }

  let hashery = new Hashmap();

  let words = [];

  let wordHold = '';
  for(let i = 0; i < story.length; i++){
    if(story[i] !== ',' &&
    story[i] !== ' ' &&
    story[i] !== '.'){
      wordHold = wordHold + story[i].toLowerCase();
      // console.log(wordHold, story[i]);
    }else{
      words[words.length] = wordHold;
      // console.log('HOLD!', wordHold);
      if(wordHold !== [] && wordHold !== '' && wordHold.length !== 0){
        let output = hashery.set(wordHold);
        if(output){
          return output;
        }
      }
      wordHold = [];


    }
    
  }
  words[words.length] = wordHold;


  console.log(story);
  console.log(words);
  
  return 'No repeated words';

}


// let a = "Once upon a time, there was a brave princess who...";
// let b = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
// let c = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
// let z = 'The quick brown fox jumped over a lazy dog';
// console.log(repeatedWord(a));
// console.log(repeatedWord(b));
// console.log(repeatedWord(c));
// console.log(repeatedWord(z));


module.exports = repeatedWord;
