// 8 kyu
// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
    return str.slice(1, -1);
}

function removeChar(str){
    let arr = str.split("")
    let newArr = []
    for (let i = 1; i < arr.length-1; i++){
      newArr.push(arr[i])
    }
    return newArr.join("")
};