// 5 kyu
// Beeramid
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16


// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let totalCans = Math.floor(bonus / price); // calculate the total number of cans we can buy
  let level = 0;
  let cansPerLevel = 1;

  while (totalCans >= cansPerLevel) { // keep adding levels as long as we have enough cans
    level++;
    totalCans -= cansPerLevel;
    cansPerLevel = Math.pow(level + 1, 2); // calculate the number of cans needed for the next level
  }

  return level;
}