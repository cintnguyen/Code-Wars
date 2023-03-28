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