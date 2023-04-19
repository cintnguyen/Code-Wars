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