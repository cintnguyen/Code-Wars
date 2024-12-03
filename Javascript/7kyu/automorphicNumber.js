// 7 kyu
// Automorphic Number (Special Numbers Series #6)

// Description:
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"


// Examples
// 25 is an automorphic number, because 25 ** 2 = 625 ends with 25, so return "Automorphic".
// 6 is an automorphic number, because 6 ** 2 = 36 ends with 6, so return "Automorphic".

const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;

function automorphic(n){
    let len = n.toString().length
    let num = (n * n).toString().slice(-len)
    return (n == num) ? 'Automorphic' : 'Not!!'
}

function automorphic(n){  
    return Math.pow(n,2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!" 
}

function automorphic(n){
    let tot = n**2
    let arr = tot.toString().split("")
    let nArr = n.toString().split("")  
    let newArr = []
    
    for(let i = 0; i < nArr.length ; i++){
      if(nArr[i] == arr[arr.length - nArr.length + i]){
        newArr.push(nArr[i])
      }
    }
    
    if(newArr.join() == nArr.join()){
      return "Automorphic"
    }else{
      return "Not!!"
    }
}