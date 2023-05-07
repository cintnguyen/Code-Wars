// 5 kyu
// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let firstArr = []
  let secondArr = []
  for (let i=0; i < arr.length; i++){
    if (arr[i] === 0){
      secondArr.push(arr[i])
    }
    else{
      firstArr.push(arr[i])
    }
  }
  return firstArr.concat(secondArr)
}