# Hashtables

## Challenge

- With vanilla JS, create a functioniong hashtable class that covers several test cases
- [X] Adding a key/value to your hashtable results in the value being in the data structure
- [X] Retrieving based on a key returns the value stored
- [X] Successfully returns null for a key that does not exist in the hashtable
- [X] Successfully handle a collision within the hashtable
- [X] Successfully retrieve a value from a bucket within the hashtable that has a collision
- [X] Successfully hash a key to an in-range value

## Approach & Efficiency

- basic `node` class created with a `next` and `value` properties
- `Linked List` class created and on setting data in the hash table will create a Linked List for the index generated
- Any additions to the same index will be appended to the linked list by a method
- `hashmap` class created that makes a new `Array` instance of a given size or defaults to 1024
- `hash` values are generated using the value of `this.size` and a primary number to first ensure the values are in the given range but are also not commonly divisible, to prevent high rates of collision

## API

- `Node`
  - only a constructor 
  - sets `value` and has a `next` of null
- `Linked List`
  - `add` will add a node as the `head` of the linked list or append to the end of a currently existing `node` list
  - `get` will traverse a provided `linked list` and return the `value[1]` value if the `value[0]` matches a provided key, else it returns `null`
  - `contains` will traverse an array and return `true` if `value[0]` matches a provided key in that list, else it returns `false` if no match is found
- `Hashmap`
  - constructor sets the `size` if provided, default of 1024
  - `hash` generates a hash value based on the total ASCII value of the provided key, multiplies by 19 and returns that total, modulo `this.size` to ensure the value is in range of the array
  - instantiates a new array based on `size`
  - `set` takes a `(key, val)` pair, generates a hash based on the tables `size` and creates a linked list value in the array if none is present, else it calls the `.add` of the existing linked list
  - `get` determines where in the array to look based on the hashed value of the provided key, running `.get` on the linked list if present or returning null if no data at the index
  - `contains` hashes the provided key and runs `.contains` on the linked list at the index, else it returns `null`