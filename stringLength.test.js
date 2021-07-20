const { test, expect } = require("@jest/globals");
const stringLength = require ('./stringLength.js');

test('returns the length of string', () => {
  expect(stringLength('avocado')).toBe(7);
})

test('return error for a empty string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String length is not between 1 and 10 characters');
});

test('return error for a large string - over than 10 characters', () => {
  expect(() => {
    stringLength('halopitecus');
  }).toThrow('String length is not between 1 and 10 characters');
})