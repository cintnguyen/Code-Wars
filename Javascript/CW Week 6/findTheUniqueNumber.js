// 6 kyu
// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
    arr.sort();
    if (arr[0] !== arr[1]) {
      return arr[0];
    }
    return arr[arr.length - 1];
  }