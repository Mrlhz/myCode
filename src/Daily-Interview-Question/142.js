/**
 * `No. 142`
 * `（算法题）求多个数组之间的交集`
 *  @example
 *  例如：
 */
function intersect(...args) {
  if (args.length === 0) {
    return []
  }

  if (args.length === 1) {
    return args[0]
  }

  const res =  args.reduce((result, arg) => {
    // console.log(result, arg);
    return result.filter(item => arg.includes(item))
  })
  console.log(res)
  return res
}

intersect([1, 2, 3], [3, 4, 5, 6, 3], [3, 4, 5, 6], [0, 1, 2, 3])
intersect([1], [1, 2], [1, 3])