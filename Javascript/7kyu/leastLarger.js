// 7 kyu
// Least Larger

// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))

function leastLarger(a,i) {
    let arr = []
    for (let j = 0; j < a.length; j ++){
      if (a[j] > a[i]){
        arr.push(a[j])
      }
    }
    return a.indexOf(Math.min(...arr))
}

function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    
    return a.findIndex(num => num === leastLargeVal)
}