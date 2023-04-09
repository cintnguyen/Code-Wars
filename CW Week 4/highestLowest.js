// 7 kyu
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    let array = numbers.split(" ").sort((a,b) => a-b)
    return `${array[array.length-1]} ${array[0]}`
  }