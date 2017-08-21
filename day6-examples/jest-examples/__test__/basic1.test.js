var assert = require('assert');

function sum(x,y, z=0) {
    return x + y;
}

describe('sum tests', () => {
    it('should return sum of two numbers', () => {
    let s = sum(3, 4)
    expect(s).tobe(7)
    })
    it('should return sum of 3 numbers', () => {
        let s = sum(3, 4, 5)
        expect(s).tobe(12)
    })
})