function isPalindrome(word) {
  const wordReversed = word.split("").reverse().join("");

  return word === wordReversed ? true : false;

  // return word === word.split("").reverse().join("") ? true : false;
}

/*
  Add your pseudocode here
   if the word is the same forward and backword return true else return false
   1. split up the word
   2. reverse it
   3. join it back together as a string
   4. compare and return the answer
*/

/*
  Add written explanation of your solution here
  a palindrome is just a word being the same in reverse so I figured if I spilt it into an array I would be able to
  use the reverse method on it and then just join it back together as a string. I then used ternary instead of an if statment
  for cleaner code ).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
