// 6 kyu
// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function breakCamelCase(str) {
    return str.replace(/[A-Z]/g, match => " " + match);
  }