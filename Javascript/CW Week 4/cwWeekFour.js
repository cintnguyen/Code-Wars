// 7 kyu 
// Jaden Casing Strings
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let arr = this.split(" ")
      let newArr = []
      for (let i = 0; i < arr.length; i++){
        let word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        newArr.push(word)
      }
      return newArr.join(" ")
    };
  
    String.prototype.toJadenCase = function() {
      return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    };
  
  
  // 8 kyu
  // Basic Mathematical Operations
  // The function should take three arguments - operation(string/char), value1(number), value2(number).
  // The function should return result of numbers after applying the chosen operation.
  
  // Examples(Operator, value1, value2) --> output
  // ('+', 4, 7) --> 11
  // ('-', 15, 18) --> -3
  // ('*', 5, 5) --> 25
  // ('/', 49, 7) --> 7
  
    function basicOp(operation, value1, value2){
      if (operation == "+"){
        return value1 + value2
      }
       else if (operation == "-"){
        return value1 - value2
      }
       else if (operation == "*"){
        return value1 * value2
      }
       else if (operation == "/"){
        return value1 / value2
      }
    }
  
  
    function basicOp(operation, value1, value2){
      return (operation == "+") ? value1 + value2 
        : (operation == "-") ? value1 - value2
        : (operation == "*") ? value1 * value2
        : value1 / value2
    }
  
    function basicOp(o, a, b) {
      return eval(a+o+b);
    }

// 8 kyu
// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

    function areYouPlayingBanjo(name) {
      if (name.charAt(0) === "R" || name.charAt(0) === "r"){
        return `${name} plays banjo`
      } else{
        return `${name} does not play banjo`
      }
    
    }


// 7 kyu
// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends){
  let yay = friends.filter(x => x.length == 4)
    return yay
}

function friend(friends){
  return friends.filter(n => n.length === 4)
}

// 7 kyu
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let total = ''
  for (let i=0; i < s.length; i++){
    let singleLetter = s.toLowerCase().split("")
    total += singleLetter[i].repeat(i+1) + "-"
  }
  let newArray = total.split("-")
  let newWord = newArray.map(x => x.charAt(0).toUpperCase()+x.slice(1))
  let please = newWord.join("-")
  return please.slice(0,please.length-1)
}


function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

function accum (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}


// 7 kyu
// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(n.toString().split("").sort((a,b) => b-a).join(""))
}


function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


function descendingOrder(n){
  let array = n.toString().split("")
  array.sort((a,b) => b-a)
  let newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i])
  }
 return parseInt(newArr.join(""))
}



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

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
