// 7 kyu
// Counting in the Amazon
// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak

// Take a given number and return the Arara's equivalent.

// e.g.

// countArara(3) 'adak anane'

// countArara(8) 'adak adak adak adak'
// countArara 3 // -> "adak anane"

// countArara 8 // -> "adak adak adak adak"

function countArara(n) {
    switch (n) {
      case 0:  return '';
      case 1:  return 'anane';
      case 2:  return 'adak';
      default: return 'adak ' + countArara(n-2);
    }
}

function countArara(n) {
    let arr = []
    if (n === 1){
      return "anane"
    }else if(n % 2 === 0){
      for (let i = 0; i < n/2; i++){
        arr.push("adak")
      }
      return arr.join(" ")
    }else{
      for (let i = 0; i < n/2-1; i++){
        arr.push("adak")
      }
      arr.push("anane")
      return arr.join(" ")
    }
}

function countArara(n) {
    var count = [];
    for (var i = 2; i <= n; i+=2) {
      count.push("adak");
    }
    if (n % 2 != 0) { count.push("anane"); }
    
    return count.join(" ");
}

