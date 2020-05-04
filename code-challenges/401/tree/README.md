# Trees
- Create binary trees and binary search trees

## Challenge
- create a binary search tree that can do the following
  - `add(value)` a new node
  - `contains(value)` confirms a value is present in tree
  - `preOrder()` can return an array of the tree in pre-order (root, left, right)
  - `inOrder()` return of tree (left, root, right)
  - `postOrder()` return of tree (left, right, root)

## Approach & Efficiency

- recursive functions are the cleanest way to to do this. i had to look at some examples before I started to figure out how they work exactly, with creating a massive stack and then peeling it back apart as each instance on the stack resolves.
- this creats some more overhead in terms of memory I think, as each instance of the function takes up space, but it allows a cleaner traversal and less complicated lines of code (once you understand what it's doing)

## API
<!-- Description of each method publicly available in each of your trees -->