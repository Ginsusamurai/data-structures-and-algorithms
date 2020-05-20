```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## summary:

- if the provided array has more than 1 value, bisect it
  - left half and right half both include the middle value
  - run the left half and right half through this same splitter again (recursive function)
  - merge the completed values in to the original array
- Merge function >
  - create pointers for left, right, and output arrays
  - while the left and right pointers are valid...
    - if left value is < right value, output to array, increment left pointer
    - else populate array and increment right pointer
    - increment array pointer
  - if the left pointer is at the end, populate the rest of the array with the values in right
  - else, populate array with rest of values in left

- Important Note: the primary conceit of this is that it breaks down any length of array in to chunks of 2 values that are then sorted, then everything is stitched back together, bit by bit, until the final array is complete

## Approach and Efficiency

- while this seems very inefficient, there actually aren't any additional loops that the function goes through so the time complexity is low
- at any given time there is only a minimal amount of the array being acted upon so that, provided you know where you are in the array, you only have 2 items to compare

## visual

![array1](/assets/array1.jpg)
