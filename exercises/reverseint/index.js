// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

// working with a string instead of a number now 
const reversed = n.toString().split('').reverse().join('');

// if n < 0, the result will be -1 so use Math.sign to solve for the negative numbers
return parseInt(reversed) * Math.sign(n);      

}

module.exports = reverseInt;


// my first attempt
// const numStr = n.toString().split('');

// const reversed = parseInt(numStr.reverse().join(''));

// return reversed;