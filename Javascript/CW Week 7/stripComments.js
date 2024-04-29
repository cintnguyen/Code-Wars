// 4 kyu
  // Strip Comments
//   Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
    const lines = input.split('\n');
    const strippedLines = [];
  
    lines.forEach(line => {
      let strippedLine = line;
      markers.forEach(marker => {
        const index = strippedLine.indexOf(marker);
        if (index !== -1) {
          strippedLine = strippedLine.slice(0, index).trim();
        }
      });
      strippedLines.push(strippedLine);
    });
  
    const output = strippedLines.join('\n');
    return output
  };