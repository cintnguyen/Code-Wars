// 8 kyu
// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.map(a => parseInt(a)).reduce((c,d) => c + d, 0)
  }