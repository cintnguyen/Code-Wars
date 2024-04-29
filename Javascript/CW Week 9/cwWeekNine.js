// 6 kyu
// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    var obj = {};
    string.split('').forEach(letter => {
        obj[letter] ? obj[letter]++ : obj[letter] = 1;
    });
    return obj;
}




// 6 kyu
// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let array = str.split("")
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "-" || array[i] === "_") {
            array[i + 1] = array[i + 1].toUpperCase()
            array.splice(i, 1)
        }
    }
    return array.join("")
}

function toCamelCase(str) {
    return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}

function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}

function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}



// 6 kyu
// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    if (str.length % 2 !== 0) {
        str = str + `_`
    }
    let array = []
    for (let i = 0; i < str.length; i += 2) {
        array.push(str.slice(i, i + 2))
    }
    return array
}

// 8 kyu
// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

function oddCount(n) {
    return Math.floor(n / 2)
}





// 7 kyu
// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""


function maskify(cc) {
    for (let i = 0; i < cc.length - 4; i++) {
        cc = cc.replace(cc[i], "#")
    }
    return cc
}



// 7 kyu
// Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


function divisors(integer) {
    let array = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            array.push(i)
        }
    }
    return array.length === 0 ? `${integer} is prime` : array
};