// 7 kyu
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let total = ''
    for (let i=0; i < s.length; i++){
      let singleLetter = s.toLowerCase().split("")
      total += singleLetter[i].repeat(i+1) + "-"
    }
    let newArray = total.split("-")
    let newWord = newArray.map(x => x.charAt(0).toUpperCase()+x.slice(1))
    let please = newWord.join("-")
    return please.slice(0,please.length-1)
  }