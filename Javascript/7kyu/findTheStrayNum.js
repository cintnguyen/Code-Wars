// 7 kyu
// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}

function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
}

function stray(numbers) {
    if (numbers[0] != numbers[1] && numbers[0] != numbers[2]){
      return numbers[0]
    }
    
    if (numbers[numbers.length-1] != numbers[numbers.length-2] && numbers[numbers.length-1] != numbers[numbers.length-3] ){
      return numbers[numbers.length-1]
    }
    
    for (let i = 1; i < numbers.length-1; i++){
      if(numbers[i] != numbers[i+1] && numbers[i] != numbers[i-1]){
        return numbers[i]
      }
    }
}

