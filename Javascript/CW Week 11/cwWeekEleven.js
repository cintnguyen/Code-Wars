// 8 kyu
// Multiply
// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
    return a * b
}


// 7 kyu
// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    str.split("").forEach(x => {
        if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
            count = count + 1
        }
    })
    return count
}

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}



// 7 kyu
// Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let vowels = str.match(/[aeiou]/ig)
    if (vowels === null) {
        return str
    }
    let arr = []
    str.split("").forEach(x => {
        if (!vowels.includes(x)) {
            arr.push(x)
        }
    })
    return arr.join("")
}


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


// 6 kyu
// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}


// 8 kyu
// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return num.toString()
}



// 7 kyu
// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str) {
    str = str.toLowerCase()
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i])
        } else {
            return false
        }
    }
    return true
}


function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i)
        for (j = i + 1; j < str.length; ++j)
            if (str[i] === str[j])
                return false;
    return true;
}


// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    return bool ? "Yes" : "No"
}