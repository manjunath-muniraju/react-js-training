var assert = require('assert');

function sum(x,y) {
    return x + y;
}

describe('sum tests', () => {
    it('should return sum of two numbers', () => {
        let s = sum(3, 4)
        assert.equal(s, 7)
    })
})