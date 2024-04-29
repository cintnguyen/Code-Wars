// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(num => num*2)
   }



// Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


function litres(time) {
 if (time !==0){
   let total = time*.5
   return Math.floor(total)
 }
 else{
   return 0;
 }
}

// 
function litres(time) {
    return Math.floor(time * 0.5);
  }


// 
const litres = time => Math.floor(time * 0.5);



// Total amount of points
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
  let total = 0
  for (let i = 0; i < games.length; i++){
    let [x,y] = games[i].split(":")
    if ( x > y ){
      total += 3
    }
    else if (x == y){
      total +=1
    }
  }
  return total
}


// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 == 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}

function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even"
}



// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
  return words.join(' ').trim()
}


function smash (words) {
  var smashed = ''
  for(var i = 0; i<words.length; i++) {
    smashed += words[i]
    if(i!=words.length-1) {
      smashed += ' '
    }
  }
  return smashed;
}

