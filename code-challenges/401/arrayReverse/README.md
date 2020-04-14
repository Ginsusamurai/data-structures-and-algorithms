# Reverse an Array
Take in an array of unsorted values (in this case they are integers) and return back an array with the values reversed.
example:
`[1, 2, 3, 4, 5, 6]` becomes `[6, 5, 4, 3, 2, 1]`

## Challenge
a few things to consider
1. do I need to return the SAME array or is a copy fine?
2. is optimization important?
3. can i use Array.reverse()?

## approach and efficiency

* initial approach is using a `for loop` to iterate through the array 'backwards', push to a new array copy.
* This creates an duplicate array which may cause memory issues depending on data size but it is a simple and fast approach
* I could have iterated with a positive counter and used unshift, or iterated with a negative and used push. I decided on push.

alt-approach
* array.reverse() exists as a built-in method and performs the task with 1 line
* highly optimized as it is built-in tool
* didn't choose this one first because I didn't realize it was there
* it seems that array.reverse() both returns an array AND alters in place. If not controlled VERY strictly this can cause VERY strange behavior and polute the data sets further down the program.

## solution whiteboard image

![arrayReverse visual]('/assets/arrayReversev2.jpg');
