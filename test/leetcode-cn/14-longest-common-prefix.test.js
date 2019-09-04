const assert = require('assert')

const { longestCommonPrefix } = require('../../src/leetcode-cn/14-longest-common-prefix')

describe('longestCommonPrefix 最长公共前缀',  () => {
  it('["flower","flow","flight"] => fl', () => {
    assert.strictEqual(longestCommonPrefix(["flower","flow","flight"]), 'fl');
  });

  it('["flower","flow","flows"] => flow', () => {
    assert.strictEqual(longestCommonPrefix(["flower","flow","flows"]), 'flow');
  });

  it('"dog","racecar","car"] => "" ', () => {
    assert.strictEqual(longestCommonPrefix(["dog","racecar","car"]), '');
  });

  it('["abcd", "abc", "ab"] => ab', () => {
    assert.strictEqual(longestCommonPrefix(["abcd", "abc", "ab"]), 'ab');
  });

});
