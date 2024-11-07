// 7 kyu
// Move 10

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


function moveTen(s){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let alphaArr = alpha.split("")    
    let oArr = s.split("")
    let newWord = []

    for( let i = 0; i < oArr.length; i ++){
      let newNum = alphaArr.indexOf(oArr[i]) + 10
      if (newNum <= 25){
        newWord.push(alphaArr[newNum])
      }
      else {
        newNum -= 26
        newWord.push(alphaArr[newNum])
      }
    }
    return newWord.join("")
}

// regular expression way
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}