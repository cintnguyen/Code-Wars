// 8 kyu
// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

function position(letter){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alpha.indexOf(letter)+1}`
}

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}