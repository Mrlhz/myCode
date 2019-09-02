const assert = require('assert')
const { longestPalindrome } = require('../../src/leetcode-cn/5-longest-palindromic-substring')

describe('longestPalindrome',  () => {
  it('should bab', () => {
    assert.strictEqual(longestPalindrome('babad'), 'bab');
  });
});