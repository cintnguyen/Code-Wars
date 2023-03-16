// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length !== 0){
    let totalArray = 0
      for (let i = 0; i < array.length; i++){
        totalArray = totalArray + array[i]
    }
    let avg = totalArray/array.length
    return avg
    }
    else{
    return 0;
    }
  }