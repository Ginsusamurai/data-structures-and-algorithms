# Stacks and Queues

- Create classes and functions for `stack` and `queue` data structures with basic operating methods
- stacks operate on `First In Last Out`
- queues operate on `First In First Out`

## Challenge

- Create a `Node` class that has a `next` and `value` property
- create a `Queue` class that has a `front` and `rear` property
  - `enqueue` a new node on to the queue
  - `dequeue` a node from the front of the queue
  - `peek` at the front of the queue
  - `isEmpty` will return bool of if the queue is empty
- create a `stack` class that has a `top`
  - `push` a new node on to the stack
  - `pop` the most recent node off the top
  - `peek` at the top node
  - `isEmpty` returns bool if the stack is empty
- create a 'psuedoQueue' that acts like a queue but is made up of only stack objects

## Approach & Efficiency

- all operations should be o(1) and not require any traversal to complete


## API

### queue

- `enqueue` a new node on to the queue
- `dequeue` a node from the front of the queue
- `peek` at the front of the queue
- `isEmpty` will return bool of if the queue is empty

### stack

- `push` a new node on to the stack
- `pop` the most recent node off the top of the stack
- `peek` at the top node of the stack
- `isEmpty` returns bool if the stack is empty

### PsuedoQueue

- `enqueue` add a new node to the queue via stack method
- `dequeue` remove the first added node via stack method

![psuedoqueue](code-challenges/401/stacksAndQueues/assets/psuedoQueue.jpg)