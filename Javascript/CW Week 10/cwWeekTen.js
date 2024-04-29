// 8 kyu
// Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
}




// 8 kyu
// Reversed Words

//   Complete the solution so that it reverses all of the words within the string passed in.

//   Words are separated by exactly one space and there are no leading or trailing spaces.

//   Example(Input --> Output):

//   "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"  

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}


// 8 kyu
// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0)
}



// 8 kyu
// Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b) {
    if (a.length > b.length) {
        return b + a + b
    }
    return a + b + a
}

// 8 kyu
// Generate range of integers

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]


function generateRange(min, max, step) {
    let arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}


// 8 kyu
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.Taking the first letter of all of the inputs and grouping them next to each other.Do this for every letter, see example below!

// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
    let a = []
    for (let i = 0; i < one.length; i++) {
        a.push(one[i], two[i], three[i])
    }
    return a.join('')
}


// 8 kyu
// The falling speed of petals

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second(5 cm / s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed(in cm / s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

//     Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non - positive, the return value should be 0


function sakuraFall(v) {
    if (v <= 0) {
        return 0
    }
    let height = 80 * 5
    return height / v
}


// 8 kyu
// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}


function differenceInAges (ages) {
    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}


function differenceInAges(ages){
    ages.sort((a,b) => a - b)
    return [ages[0], ages[ages.length-1], ages[ages.length-1] - ages[0]]
   }