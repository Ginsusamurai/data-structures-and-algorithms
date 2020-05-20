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

summary:
1. if the provided array has more than 1 value, bisect it
  1. left half and right half both include the middle value
  1. run the left half and right half through this same splitter again (recursive function)
  1. merge the completed values in to the original array
1. Merge function >
  1. create pointers for left, right, and output arrays
  1. while the left and right pointers are valid...
    1. if left value is < right value, output to array, increment left pointer
    1. else populate array and increment right pointer
    1. increment array pointer
  1. if the left pointer is at the end, populate the rest of the array with the values in right
  1. else, populate array with rest of values in left