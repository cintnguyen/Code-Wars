// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    if (numbers.length !== 0){
      let total = 0
      for (let i = 0; i < numbers.length; i++){
        total += numbers[i] 
      }
      return total
    }
    else{
      return 0
    }
  }