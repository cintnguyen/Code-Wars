// 6 kyu
// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let array = str.split("")
    for (let i=0; i<array.length; i++){
      if(array[i] === "-" || array[i] === "_"){
        array[i+1] = array[i+1].toUpperCase()
        array.splice(i,1)
      }
    }
    return array.join("")
  }