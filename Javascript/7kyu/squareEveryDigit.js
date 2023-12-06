// 7 kyu
// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num){
    let arr = num.toString().split("")
      let newArr = arr.map(x => {
        return x*x
      })
      return parseInt(newArr.join(""))
  }

function squareDigits(num){
    let arr = num.toString().split("")
      let fin = []
      arr.map(x => {
        fin.push((parseInt(x)**2).toString())
      })
      return parseInt(fin.join(""))
}

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

