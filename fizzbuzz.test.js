const  fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz', () => {

    test('Should print fizz if they recieve a multiple of 2', () => {
        const expected = "fizz";
        const result = fizzbuzz(4);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recieve a multiple of 3', () => {
        const expected = "buzz";
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recieve a multiple of 2 and 3', () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(12);
        expect(expected).toBe(result);
    });

    test('Should print Nope if they recieve any other number', () => {
        const expected = "Nope";
        const result = fizzbuzz(7);
        expect(expected).toBe(result);
    });

});