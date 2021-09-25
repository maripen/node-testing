const expect = require('chai').expect;
// import math file
const asyncMath = require('../asyncMath');
describe('asyncMath.js tests', () => {
    describe('asyncMath.add() Test', () => {
        it('should equal 2', async () => {
            const result = await asyncMath.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = asyncMath.add(2, 2);
            expect(result).to.equal(4);
        });
        it('should throw an error', async () => {
            try {
                await asyncMath.add(1);
            } catch (error) {
                expect(error).to.equal('missing arg');
            }
        });
    });

    describe('asyncMath.multiply() Test', () => {
        it('should equal 3', () => {
            const result = asyncMath.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = asyncMath.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});