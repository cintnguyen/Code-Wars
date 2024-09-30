// 8 kyu
// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


function abbrevName(name){
    let twoName = name.split(" ")
    let fName = twoName[0].split("")
    let lName = twoName[1].split("")
    return `${fName[0].toUpperCase()}.${lName[0].toUpperCase()}`
}


function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}