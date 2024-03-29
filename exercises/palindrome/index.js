// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

// SOLUTION 2 
// advanced array helper - not the best way of solving it as it is doing twice as much work as needed
return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
});

}

module.exports = palindrome;


// My 1st attempt 
// function palindrome(str) {

//     const secondStr = str.split('').reverse().join('');
    
//     if (str === secondStr)
//         return true
//     }


// SOLUTION #1
// function palindrome(str) {

//     const reversed = str.split('').reverse().join('');
    
//     return str === reversed;
//     }
    