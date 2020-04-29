'use strict';

const Shelter = require('./fifo_animal_shelter.js');


const shelter = new Shelter();

shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');

console.log(shelter);
shelter.dequeue('dog');
console.log(shelter);
