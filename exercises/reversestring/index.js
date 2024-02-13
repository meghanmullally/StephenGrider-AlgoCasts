// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // SOLUTION #3
    // reduce to condense down to 1 single string value
    // reduce takes 2 arguments 
    return str.split('').reduce((rev, char) =>   char + rev, '');
        // function runs 1 time for every element

        // instead of 1 liner 
        // return str.split('').reduce((rev, char) =>   {return char + rev, ''});


}

module.exports = reverse;

// SOLUTION #1 
// const arr = str.split('');
// flip / reserve all the elements in the str
// arr.reverse();
// join elements back into str
// return arr.join('');

// if you want to do a 1 liner
// return str.split('').reverse().join('');

// SOLUTION #2:
// let reversed = '';

// // for, var declaration and iterating through each str 
//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;