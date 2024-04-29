// 7 kyu
// Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length)
}


// 8 kyu
// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.
function check(a, x) {
  return a.includes(x)
}


// 7 kyu
// Categorize New Member
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  let array = []
  data.forEach(x => {
    if (x[0] >= 55 && x[1] > 7) {
      array.push("Senior")
    }
    else {
      array.push("Open")
    }
  })
  return array
}

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}



// 8 kyu
// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
  let array = str.split("")
  let newArray = array.map(x => x.repeat(2)).join("")
  return newArray
}


// 8 kyu
// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return x.map(a => parseInt(a)).reduce((c,d) => c + d, 0)
}



// 8 kyu
// Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0){
    return number*8
  }
  else{
    return number*9
  }
}

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}


// 7 kyu
// Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
  let sum = array.reduce((a,b) => a + b, 0)
  if (sum % 2 === 0 || sum === 0){
    return "even"
  }
  else{
    return "odd"
  }
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}


// 8 kyu
// Keep up the hoop
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if(n >= 10){
    return "Great, now move on to tricks"
  }
 else{
   return "Keep at it until you get it"
 }
}