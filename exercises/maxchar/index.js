// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max =0;
  let maxChar = "";
  for (let i of str) {
    if(obj[i]) {
      obj[i] ++;
    }else {
      obj[i] = 1;
    }
  }

 for (let char in obj) {
   if (obj[char] > max) {
    max = obj[char];
    maxChar = char;
   }
 }
  return maxChar;


}

module.exports = maxChar;



// const string = "Hello World";
// const arr = string.split("");
// const obj = arr.reduce((counter, letter) => {
//   counter[letter] ? counter[letter] ++ : counter[letter] = 1;
//   return counter;
// }, {})

// console.log(obj)