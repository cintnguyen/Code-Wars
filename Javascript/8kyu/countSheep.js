// 8 kyu
// If you can't sleep, just count sheep!!

// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


countSheepp = n => [...Array(n).keys()].map(x=>`${x+1} sheep...`).join``


const countSheep = function (num){
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += i + ' sheep...';
    }
    return result;
}

const countSheepp = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
      val += `${i} sheep...`;
    }
    return val;
}