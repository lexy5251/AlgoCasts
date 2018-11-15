// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  //solution 1
  // let newStr = str.toLowerCase();
  // let num = 0;
  // for (let i = 0; i < newStr.length; i++) {
  //   if (newStr[i] == "a" || newStr[i] == "e" || newStr[i] == "i" || newStr[i] == "o" || newStr[i] == "u") {
  //     num += 1;
  //   }
  // }
  // return num;

  //solution 2
  // let num = 0;
  // const vow = ["a", "e", "i", "o", "u"];

  // for (let char of str.toLowerCase()){
  //   if (vow.includes(char)){
  //     num++;
  //   }
  // }

  // return num;

  //solution 3

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;

}

module.exports = vowels;
