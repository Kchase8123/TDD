function returnsThree() {
  return 3;
}

function reciprocal(n = 0) {
  if(n < 1 || n > 1000000) {
    throw new RangeError('Argument must be between 1 and 1000000')
  }
  return 1/n;
}
//  try {
//   reciprocal(5);
//   reciprocal(-10);
//   reciprocal(2000000);
// } catch (error) {
//   console.log(error.message)
// }
module.exports = {
  returnsThree,
  reciprocal
};
