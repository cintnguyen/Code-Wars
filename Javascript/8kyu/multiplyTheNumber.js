// 8 kyu
// Multiply the number

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)


function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}



function multiply(number){
    let exp = Math.abs(number).toString().length
    return number*(5**exp)
}