// 8 kyu
// Century From Year

// Description:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

const century = year => Math.ceil(year/100)

function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
}

function century(year) {
    let arr = year.toString().split("")
    if (arr.length < 3){
      return 1
    }
    else if (arr.length < 4 && Number(arr[arr.length-1]) == 0 && Number(arr[arr.length-2]) == 0){
      return Number(arr[0])
    }
    else if (arr.length < 4 ){
      return Number(arr[0]) + 1
    }
    else if (arr.length < 5 && Number(arr[arr.length-1]) == 0 && Number(arr[arr.length-2]) == 0){
      return Number(`${arr[0] + arr[1]}`)
    }
    return Number(`${arr[0] + arr[1]}`) + 1
}