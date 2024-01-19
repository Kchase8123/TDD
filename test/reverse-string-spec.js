
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string')

describe ('reverseString', () => {
it('should reverse the string', () => {
    const input = 'fun';
    const res = reverseString(input);
    expect(res).to.equal("nuf");
    expect(res).to.not.equal("fun");
})
})
