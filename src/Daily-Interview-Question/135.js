/**
 * `No. 135`
 * `在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。`
 *  @example
 *  例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
 */
function sort(str) {
  const map = { '黄': 0, '红': 1, '蓝': 2 }
  const arr = str.split('')
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (map[arr[j]] > map[arr[j+1]]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }      
    }
  }
  console.log(arr.join(''))
  return arr.join('')
}

// sort('红蓝蓝黄红黄蓝红红黄红')

function sort1(str) {
  const map = { '黄': 0, '红': 1, '蓝': 2 }
  const res = [...str].sort((a, b) => map[a] - map[b])
  console.log(res)
}