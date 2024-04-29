// 6 kyu
// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

  // 6 kyu
  // Multiples of 3 or 5

  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
  
  // Note: If the number is a multiple of both 3 and 5, only count it once.  

  function solution(number){
    console.log(number)
    let array = []
    for (let i = 1; i < number; i++){
      if (i % 3 === 0 || i % 5 === 0){
        array.push(i)
      }
      else if(i < 0){
        return 0
      }
    }
    console.log(array)
    return array.reduce((a,b) => a+b,0)
  }



  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

  // 4 kyu
  // Strip Comments
//   Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

  function solution(input, markers) {
    const lines = input.split('\n');
    const strippedLines = [];
  
    lines.forEach(line => {
      let strippedLine = line;
      markers.forEach(marker => {
        const index = strippedLine.indexOf(marker);
        if (index !== -1) {
          strippedLine = strippedLine.slice(0, index).trim();
        }
      });
      strippedLines.push(strippedLine);
    });
  
    const output = strippedLines.join('\n');
    return output
  };



// 6 kyu
// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

  function digitalRoot(n) {
    let array = n.toString().split("")
    let total = 0
    if (array.length === 1){
      return parseInt(array[0])
    }
    for (let i = 0; i < array.length; i++){
        total += parseInt(array[i])
    }
    return digitalRoot(total)
  }

  
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }



  // 6 kyu
  // Stop gninnipS My sdroW!
  // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  // Examples:
  
  // spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  // spinWords( "This is a test") => returns "This is a test" 
  // spinWords( "This is another test" )=> returns "This is rehtona test"


  function spinWords(string){
    string = string.split(" ").map(word =>{
      if (word.length >= 5){
        word = word.split("").reverse().join("")
      }
      return word
    })
    return string.join(" ")
  }



// 6 kyu
// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(int){
  var even = int.filter(a => a%2 == 0);
  var odd = int.filter(a => a%2 !== 0);
  return even.length==1 ? even[0] : odd[0];
}


  function findOutlier(integers) {
    // Initialize counters for even and odd integers
    let evenCount = 0;
    let oddCount = 0;
    let evenNumber, oddNumber;
  
    // Loop through the first 3 integers to determine whether the array is mostly even or odd
    for (let i = 0; i < 3; i++) {
      if (integers[i] % 2 === 0) {
        evenCount++;
        evenNumber = integers[i];
      } else {
        oddCount++;
        oddNumber = integers[i];
      }
    }
  
    // Check if the majority of the array is even or odd
    const isMostlyEven = evenCount > oddCount;
  
    // Loop through the rest of the array to find the outlier
    for (let i = 3; i < integers.length; i++) {
      if (isMostlyEven && integers[i] % 2 !== 0) {
        return integers[i];
      } else if (!isMostlyEven && integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  
    // Return the even or odd number that was originally determined to be in the majority
    return isMostlyEven ? oddNumber : evenNumber;
  }



  // 7 kyu
  // You're a square!
  // Given an integral number, determine if it's a square number:

  // In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
  
  // The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  
  // Examples
  // -1  =>  false
  //  0  =>  true
  //  3  =>  false
  //  4  =>  true
  // 25  =>  true
  // 26  =>  false


  let isSquare = function(n){
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false
  }


  // 6 kyu
  // Create Phone Number
  // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  // Example
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  
  function createPhoneNumber(numbers){
    numbers.splice(0,0,"(")
    numbers.splice(4,0,") ")
    numbers.splice(8,0,"-")
    return numbers.join("")
  }

  
  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }


  function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }