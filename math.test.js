const {add, subtract, multiply, divide, squareRoot, maxNumber} = require("./math");

describe("testing math module", ()=>{
    // addition test
    test('add two numbers together to find the sum', () => { 
        expect(add(3,7)).toBe(10);
     })
     // subtraction test
     test('subtract two numbers to find the difference', () => { 
        expect(subtract(10,7)).toBe(3);
     })
     // multiplication test
     test('multiply two numbers together to find the product', () => { 
        expect(multiply(12,12)).toBe(144);
     })
     // division test
     test('divide two numbers to find the quotient', () => { 
        expect(divide(14,2)).toBe(7);
     })
     // square root test
     test('find the square root of a given number', () => { 
        expect(squareRoot(25)).toBe(5);
     })
     //max number test
     test('what is the highest number in a given set of numbers', () => { 
        expect(maxNumber(3,7,37)).toBe(37);
     })
})