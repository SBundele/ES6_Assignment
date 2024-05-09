function combiningNestedArrays(array1, array2){
    let combinedArray = [...array1, ...array2]
    return combinedArray
}

// Example Invocation
const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log(combiningNestedArrays(array1, array2)); 
// Expected Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
