// 8 kyu
// DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U")
}

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}


// 6 kyu
// Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
  let array = text.split("")
  console.log(array)
  let newArray = []
  array.forEach(x => {
    newLetter = x.toLowerCase()
    if (/[a-z]/.test(newLetter)){
      newArray.push(newLetter.charCodeAt(0) - 96)
      //unicode value for a is 97, therefore subtract -96 to get corresponding alphabet number         
    console.log(newLetter.charCodeAt(0))
    }
  })
  return newArray.join(" ")
}

// 6 kyu
// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let newArray = []
  a.forEach(x => {
    if (!b.includes(x)){
      newArray.push(x)
    }
  })
  return newArray
}

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}



// 6 kyu
// Tribonacci Sequence
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature,n){
 if (n <= 2){
   return signature.slice(0, n);
 }
  
  for (let i = 3; i < n; i++) {
    const nextNum = signature[i - 1] + signature[i - 2] + signature[i - 3];
    signature.push(nextNum);
  }
  
  return signature;
}


// 6 kyu
// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  arr.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  return arr[arr.length - 1];
}

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}


// 6 kyu
// Consecutive strings
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(strarr, k) {
    const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }
  let longest = "";
  for (let i = 0; i < n - k + 1; i++) {
    const current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}


// 8 kyu
// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let array = []
  for (let i = 1; i < n+1; i++){
    array.push(i)
  }
  return array.reverse()
}

let reverseSe = length => Array.from({length}, () => length--)
