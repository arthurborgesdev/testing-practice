const { test, expect } = require("@jest/globals");
const capitalize = require('./capitalize.js');

test('should capitalize a string', () => {
  expect(capitalize('arthur')).toBe('Arthur');
})