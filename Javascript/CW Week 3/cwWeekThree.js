// Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

function addLength(str) {
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++){
      array[i] = `${array[i]} ${array[i].length}`
    }
  return array;
}

function addLength(str){
    str.split(" ").map(x => `${x} ${x.length}`)
}

function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
  }

// OOP: Object Oriented Piracy

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Task

// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

class Ship {
  constructor(draft,crew){
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt(){
    let crewTotalWeight = 1.5 * this.crew
    let treasure = this.draft - crewTotalWeight
    if (treasure > 20){
      return true
    }
    else{
      return false
    }
  }
}

// const mayflower = new Ship(20,30)
// console.log(mayflower.draft, mayflower.crew)

// const yellow = new Ship(5,10)
// console.log(yellow.draft, yellow.crew)


// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  return i*2;
}


// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++){
    if (haystack[i] == "needle"){
      return `found the needle at position ${i}`
    }
  }
}

function findNeedle(haystack){
  let answer = 'not found'
  haystack.forEach((x,i) => {
    if (x === "needle"){
      answer = `found the needle at position ${i}`
    }
  })
  return answer
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (!array || array.length <= 1 ){
    return 0
  }
  array.sort((a,b) => a - b)
  let total = 0
  for (let i=1; i < array.length-1; i++){
    total += array[i]
  }
  return total
}


// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  let newArr = []
  for (let i = 0; i <l.length; i++){
    if (typeof l[i] == "number"){
     newArr.push(l[i])
    }
  }
return newArr
}

function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }

 function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
  if (a === b){
    return a
  }
 let min = Math.min(a,b)
 let max = Math.max(a,b)
 let sum = 0
 
 for (let i = min; i <= max; i++){
   sum += i
 }
 return sum
}

