// String Repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

  function repeatStr(n, s) {
    let repeatedString = ''
    for(let i = 1; i <= n; i++){
      repeatedString += s
    }
    return repeatedString
  }


// Calculate Average
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


// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

  function bmi(weight, height) {
    let sum = weight /(height * height)
    if (sum <= 18.5){
      return "Underweight"
    }
    else if (sum <= 25.0){
      return "Normal"
    }
    else if (sum <=30.0){
      return "Overweight"
    }
    else{
      return "Obese"
    }
  }


// Square Sums
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

  function squareSum(numbers){
    let sum = 0
    if (numbers.length !==0){
    for (let i = 0; i < numbers.length; i++){
      sum = sum + (numbers[i]*numbers[i])
    }
    return sum
    }
    return 0
  }
  

// Sum Arrays
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

  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  // 8 kyu
  // Will there be enough space?
  // You have to write a function that accepts three parameters:

  // cap is the amount of people the bus can hold excluding the driver.
  // on is the number of people on the bus excluding the driver.
  // wait is the number of people waiting to get on to the bus excluding the driver.
  // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
  
  // Usage Examples:
  // cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
  // cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

  function enough(cap, on, wait) {
    let open = cap - on
    if (open >= wait){
      return 0
    }
    else{
      return wait - open
    }
  }

  // 8 kyu
  // Third Angle of a Triangle
  // You are given two interior angles (in degrees) of a triangle.

  // Write a function to return the 3rd.
  
  // Note: only positive integers will be tested.

  function otherAngle(a, b) {
    return 180 - a - b
  }


  // 8 kyu
  // Convert a Boolean to a String
  // Implement a function which convert the given boolean value into its string representation.

  function booleanToString(b){
    return b.toString()
  }