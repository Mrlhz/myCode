/**
 * @description 最长公共前缀
 *
 * @param {Array} strs
 * @returns {String}
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return ''
  let prefix = strs[0]

  for (let i = 0, len = strs.length; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length === 0) return ''
    }
  }
  return prefix
}

// longestCommonPrefix(["flower","flow","flight"])
// longestCommonPrefix(["flower","flow","flows"])
// longestCommonPrefix(["dog","racecar","car"])


module.exports = {
  longestCommonPrefix
}