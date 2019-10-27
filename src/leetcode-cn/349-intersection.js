/**
 * `No. 349. 两个数组的交集`
 * @see https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/
 * `../Daily-Interview-Question/142-intersection-of-arrays.js`
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @example
 * nums1 = [1,2,2,1], nums2 = [2,2] => [2]
 * nums1 = [4,9,5], nums2 = [9,4,9,8,4] => [9,4]
 */
function intersection(nums1, nums2) {
  const set1 = new Set(nums1)
  const arr2 = [...new Set(nums2)]
  const res = []
  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) res.push(arr2[i])
  }
  console.log(res)
  return res
}


intersection([1, 2, 2, 1], [2, 2])
intersection([4, 9, 5], [9, 4, 9, 8, 4])