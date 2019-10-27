/**
 * `No. 142`
 * `（算法题）求多个数组之间的交集`
 *  @example
 *  例如：
 */
function intersect(...args) {
  let acc = args[0]
  let res = []
  for (let i = 1; i < args.length; i++) {
    const cur = args[i]
    // acc = acc.filter((item) => cur.includes(item))
    for (let j = 0; j < cur.length; j++) {
      const item = cur[j]
      if (acc.includes(item) && !res.includes(item)) {
        res.push(item)
      }
    }
    acc = res
  }
  console.log(acc)
  return acc
}

function intersect1(...args) {
  if (args.length === 0) {
    return []
  }

  if (args.length === 1) {
    return args[0]
  }

  const res =  args.reduce((result, arg) => {
    console.log(result, arg);
    return result.filter(item => arg.includes(item))
  })
  console.log(res)
  return res
}

// test
intersect([1, 2, 3], [3, 4, 5, 6, 3], [3, 4, 5, 6], [0, 1, 2, 3])
// intersect([1], [1, 2], [1, 3, 1, 1])
// intersect1([1, 2, 3], [3, 4, 5, 6, 3], [3, 4, 5, 6], [0, 1, 2, 3])
// intersect1([1], [1, 2], [1, 3])