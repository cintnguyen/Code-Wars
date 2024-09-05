// 8 kyu
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum(arr) {
    let total = 0
    for (let i = 0; i <arr.length; i++){
      if (arr[i] > 0){
        total += arr[i]
      }
    }
    return total
}

function positiveSum(arr) {
    let newArr = []
    for (let i = 0; i <arr.length; i++){
      if (arr[i] > 0){
        newArr.push(arr[i])
      }
    }
  return newArr.reduce((a,b) => a + b,0)
}