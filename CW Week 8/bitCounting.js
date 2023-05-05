// 6 kyu
// Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  
  
let countBits = function(n) {
    let num = (n >>> 0).toString(2)
    let array = num.split("")
    return array.reduce((a,b) => Number(a)+Number(b),0)
  };