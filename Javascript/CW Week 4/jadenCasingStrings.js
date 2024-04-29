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

    