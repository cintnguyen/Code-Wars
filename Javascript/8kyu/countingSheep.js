// 8 kyu
// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]


function countSheeps(sheep) {
    let count = 0
    sheep.forEach(x => {
      if(x) {
        count += 1
      } 
    })
    return count
}