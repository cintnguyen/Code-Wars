// 7 kyu
// Matrix creation

// Create an identity matrix of the specified size ( >= 0 ).

// Some examples:

// (1)  =>  [[1]]


// (2) => [ [1,0],
//          [0,1] ]


//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]   


function getMatrix(number) {
    let arr = []
    if (number === 0){
      return []
    }else{
      for (let i = 0; i < number; i++){
        let innerArr = []
        for (let j = 0; j < number; j++){
          if(i == j){
            innerArr.push(1)
          }else{
            innerArr.push(0)
          }
        }
        arr.push(innerArr)
      }
      return arr
    }
} 

function getMatrix(number) {
    const matrix = [];
    for (let i = 0; i < number; i++) {
      matrix[i] = Array(number).fill(0)
      matrix[i][i] = 1;
    }
    return matrix;
} 

function getMatrix(size) {
    var matrix = [];
    for(var i = 0; i < size; i++) {
      matrix[i] = [];
      for(var j = 0; j < size; j++) {
        matrix[i][j] = (i == j ? 1 : 0);
      }
    }
    return matrix;
}