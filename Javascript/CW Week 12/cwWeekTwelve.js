// 8 kyu
// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return number * -1
}



// 8 kyu
// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {
    return str.split("").reverse().join("")
}

// JUNE 1 ------------------------
// 8 kyu
// Pillars
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  if(numPill <= 1){
    return 0
  }
  let newDist = dist * 100
  let totalDist = (numPill * width) + ((numPill-1) * newDist)
  let final = totalDist - (2 * width)
  return final
}