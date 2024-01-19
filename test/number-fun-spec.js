const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe ('returnsThree', () => {
    it('function returns 3', () => {
        const res = returnsThree();
        expect(res).to.equal(3)
    })
})

describe ('reciprocal', () => {
    context('with valid arguments', () => {
    it('should return the reciprocal of n', () => {
        const input = 4;
        const res = reciprocal(input);
        expect(res).to.equal(1/4);
        expect(res).to.not.equal(!(1/4));
    })
})
context('with invalid arguments', () => {
    it('should throw a RangeError for arguments less than 1', () => {
      expect(() => reciprocal(0)).to.throw(RangeError, "Argument must be between 1 and 1000000");
    });

    it("should throw a RangeError for arguments greater than 1000000", () => {
      expect(() => reciprocal(1000001)).to.throw(RangeError, "Argument must be between 1 and 1000000");
    });
})
})
