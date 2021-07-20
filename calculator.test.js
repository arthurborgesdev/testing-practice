const { test, expect } = require("@jest/globals");
const Calculator = require ('./calculator.js');

const calculator = new Calculator();

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(calculator.add(-2, -4)).toBe(-6);
  })

  test('adds string should fail', () => {
    expect(() => { 
      calculator.add(5, 'five');
    }).toThrow('It can only add numbers!');
  });
});

describe('subtract function', () => {
  test('subtracts two positive numbers', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  test('subtracts two negative numbers', () => {
    expect(calculator.subtract(-2, -4)).toBe(2);
  })

  test('subtracts string should fail', () => {
    expect(() => { 
      calculator.subtract(5, 'five');
    }).toThrow('It can only subtract numbers!');
  });
})

describe('divide function', () => {
  test('divides two numbers', () => {
    expect(calculator.divide(2, 3)).toBeCloseTo(0.66666666);
  });

  test('divides to zero should fail', () => {
    expect(() => {
      calculator.divide(-2, 0);
    }).toThrow('It is impossible to divide by zero');
  })

  test('divides string should fail', () => {
    expect(() => { 
      calculator.divide(5, 'five');
    }).toThrow('It can only divide numbers!');
  });
})

describe('multiply function', () => {
  test('multiplies two positive numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('multiplies two negative numbers', () => {
    expect(calculator.multiply(-2, -4)).toBe(8);
  })

  test('multiplies string should fail', () => {
    expect(() => { 
      calculator.multiply(5, 'five');
    }).toThrow('It can only multiply numbers!');
  });
})