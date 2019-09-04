const assert = require('assert')

const { reverse, reverseInteger } = require('../../src/leetcode-cn/7-reverse-integer')

// run 
// npx  mocha ./test/leetcode-cn/7-reverse-integer.test.js

describe('reverse 整数反转',  () => {
  it('-900 -> -9', () => {
    assert.strictEqual(reverse(-900), -9);
  });

  it('123 -> 321', () => {
    assert.strictEqual(reverse(123), 321);
  });

  it('120 -> 21', () => {
    assert.strictEqual(reverse(120), 21);
  });

  it('-2147483647 -> 0', () => {
    assert.strictEqual(reverse(-2147483647), 0);
  });
});

describe('reverseInteger 整数反转',  () => {
  it('-900 -> -9', () => {
    assert.strictEqual(reverseInteger(-900), -9);
  });

  it('123 -> 321', () => {
    assert.strictEqual(reverseInteger(123), 321);
  });

  it('120 -> 21', () => {
    assert.strictEqual(reverseInteger(120), 21);
  });

  it('-2147483647 -> 0', () => {
    assert.strictEqual(reverseInteger(-2147483647), 0);
  });
});
