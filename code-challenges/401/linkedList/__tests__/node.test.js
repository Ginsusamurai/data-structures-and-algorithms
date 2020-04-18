'use strict';

const Node = require('../lib/node');



describe('Node module', () => {
  it('should create a new node', () => {
    let val = 'test value';
    let node = new Node(val);
    expect(node.value).toEqual('test value');
    expect(node.next).toBeNull();
  });
});
