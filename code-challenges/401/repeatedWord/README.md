# Challenge Summary

- Find a repeated word in a string

## Challenge Description

- Write a function that accepts a lengthy string
- without built-in methods, return the first word to occure more than once in the string

## Approach

- split the string on punctuation, whitespace and other non-word characters
- hash each word
- on a collision, traverse the linked list, see if there is a value that matches. If so return the current word. else, append it

## Efficiency

- reason: I need a way to be able to keep a well ordered list of all existing words without having to iterate through it repeatedly. Using a hashmap I can 'sort' the words in order of their appearence and end as soon as a match is found
- Speed => O(n). As the input is iterated through words are dynamically carved out and sent to the hashtable for input. On the first instance of a collision where the data ALSO matches, the return is passed back and from the Linked list to the Hashtable to the function. If NO match is ever found, a notification message is sent to the user as well as a printout of the words up to the last word
- Size => O(2n). each word in the string needs to be maintained for comparison later on so this is unavoidable. Comparing just the char values is not sufficient as ordering of characters can become important
- I had to build the hashmap structure from scratch including node and linked lists and then find a non-method way of splitting the words out and setting them in the hashmap. The only step I didn't successfully manage was casting to lower case. Everything else is done long-form without methods.

