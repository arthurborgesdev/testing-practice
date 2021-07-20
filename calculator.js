class Calculator {
  constructor() {}

  add(x, y) {
    if (typeof(x) !== "number" || typeof(y) !== "number") {
      throw new Error('It can only add numbers!');
    }
    return x + y;
  }

  subtract(x, y) {
    if (typeof(x) !== "number" || typeof(y) !== "number") {
      throw new Error('It can only subtract numbers!');
    }
    return x - y;
  }

  divide(x, y) {
    if (y === 0) {
      throw new Error('It is impossible to divide by zero');
    } else if (typeof(x) !== "number" || typeof(y) !== "number") {
      throw new Error('It can only divide numbers!');
    }
    return x / y;
  }

  multiply(x, y) {
    if (typeof(x) !== "number" || typeof(y) !== "number") {
      throw new Error('It can only multiply numbers!');
    }
    return x * y;
  }
}

module.exports = Calculator