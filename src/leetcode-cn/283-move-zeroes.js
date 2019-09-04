/**
 * @description 
 * @see https://leetcode-cn.com/problems/move-zeroes/
 *
 * @param {Array} nums
 * @returns {Array}
 */
function moveZero(nums) {
  let len = nums.length
  let i = 0

  while (len > 0) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
    len--
  }

  return nums
}

function moveZero1(nums) {
  const max = nums.length
  let start = 0
  let end = max - 1

  while(start < end) {
    const item = nums[start]
    if (item === 0) {
      nums.splice(start, 1)
      nums.push(0)
      end--
      continue
    }
    start++
  }
  return nums
}

function moveZero2(nums) {
  for (const a of nums) {
    console.log(a);
    if(a === 0){
      nums.splice(nums.indexOf(a), 1)
      nums.push(a)
    }
  }
  return nums
}


module.exports = {
  moveZero
}