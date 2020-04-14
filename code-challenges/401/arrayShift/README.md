# Challenge Summary

- Create a function that takes an array and a value
- return an array with the value added to the middle
- do not use built-in functions

## Challenge Description

- Considerations
  - how to handle odd numbers (which side of the middle point should the value be added on?)
  - return the same array or new array?
  - data sanitization? (i throw an error if the first argument is not an array)

## Approach & Efficiency

- Approach 1
  - find length of inital array
  - set a new array1 to a slice of the original array from 0 to 1/2 length
  - set a new array3 to to the slice from 1/2 length to end
  - create a new array2 that has a single index which is the value parameter
  - concat array1 to array2 to array3
  - return the concatenated array
-Approach 2
  - save off half the length of original array, rounded down
  - use a for loop to iterate through array and push each value in to a temp array
  - when the index matches the saved off length, push the val in to the temp array
  - finish the rest of the array
  - return temp array

## Solution

![white board](/assets/array-shift.jpg)