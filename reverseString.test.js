const { test, expect } = require("@jest/globals");
const reverseString = require ('./reverseString.js');

test('reverses string', () => {
  expect(reverseString('avocado')).toEqual('odacova');
});