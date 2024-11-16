// 8 kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


function remove(s, n) {
    let result = '';
    let count = 0;

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // If we encounter an exclamation mark and we still need to remove it
        if (s[i] === '!' && count < n) {
            count++; // Increment the counter of removed exclamation marks
        } else {
            result += s[i]; // Add the character to the result
        }
    }
    return result;
}