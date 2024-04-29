// 5 kyu
// Beeramid
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16


// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let totalCans = Math.floor(bonus / price); // calculate the total number of cans we can buy
    let level = 0;
    let cansPerLevel = 1;
  
    while (totalCans >= cansPerLevel) { // keep adding levels as long as we have enough cans
      level++;
      totalCans -= cansPerLevel;
      cansPerLevel = Math.pow(level + 1, 2); // calculate the number of cans needed for the next level
    }
  
    return level;
  }


  // 6 kyu
  // Does my number look big in this?
  // A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

  // For example, take 153 (3 digits), which is narcissistic:
  
  //     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  // and 1652 (4 digits), which isn't:
  
  //     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
  // The Challenge:
  
  // Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
  
  // This may be True and False in your language, e.g. PHP.
  
  // Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

  function narcissistic(value) {
    let arrayOfNum = value.toString().split("")
    let newArray = arrayOfNum.map(x => 
      x = Math.pow(x,arrayOfNum.length)
    )
    let total = newArray.reduce((a,b) => a+b,0)
    return total === value
  }




// 7 kyu
// Palindromes Here and There
// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

// For example:

// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

  function convertPalindromes(numbers) {
    return numbers.map(x => x.toString().split("").reverse().join("") === x.toString() ? 1 : 0
  )} 




  // 8 kyu
  // Is the string uppercase?

  // Create a method to see whether the string is ALL CAPS.

  // Examples (input -> output)
  // "c" -> False
  // "C" -> True
  // "hello I AM DONALD" -> False
  // "HELLO I AM DONALD" -> True
  // "ACSKLDFJSgSKLDFJSKLDFJ" -> False
  // "ACSKLDFJSGSKLDFJSKLDFJ" -> True
  
  String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
  }


// 6 kyu
// Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  
  
let countBits = function(n) {
  let num = n.toString(2)
  let array = num.split("")
  return array.reduce((a,b) => Number(a)+Number(b),0)
};


// 5 kyu
// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let firstArr = []
  let secondArr = []
  for (let i=0; i < arr.length; i++){
    if (arr[i] === 0){
      secondArr.push(arr[i])
    }
    else{
      firstArr.push(arr[i])
    }
  }
  return firstArr.concat(secondArr)
}


var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}


var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}



// 5 kyu
// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let array = str.split(" ")
  let finalArr = []
  array.forEach( word => {
    let letterArr = word.split("")
    console.log(letterArr)
    for (let i = 1 ; i < letterArr.length; i++){
      finalArr.push(letterArr[i])
    }
    if(letterArr[0] !== "!" && letterArr[0] !== "?" ){
      finalArr.push(letterArr[0] + "ay" + " ")
    }
    else{
      finalArr.push(letterArr[0])
    }
  })
  return finalArr.join("").trim()
}

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}


function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}


function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}









  // AXIM mock interview question

  function doAllTheStringStuff(string) {
    const uniqueCharacters = new Set(string);
    var repeatedCharacters = 0;
    
    for (var character of uniqueCharacters) {
      if(string.indexOf(character) !== string.lastIndexOf(character)) {
        repeatedCharacters++;
      }
    }
  
    return {
      reversed: string.split("").reverse().join(""),
      numberOfRepeatedCharacters: repeatedCharacters,
      noDuplicates: [...uniqueCharacters].join("")
    }
  }

  function duplicate(array) {
    // return [array, array]
    return [...array, ...array]
  }


  