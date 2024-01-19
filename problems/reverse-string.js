function reverseString(string) {
  let res = '';

  for(let i = string.length -1; i >= 0; i--) {
    res = res + string[i];
  }
return res;
};
console.log(reverseString('fun'))

module.exports = reverseString;
